import * as CryptoJS from "crypto-js";

class Block {
  static caculateBlockHash = (
    index: number,
    previousHash: string,
    timestamp: number,
    data: string
  ): string =>
    CryptoJS.SHA256(index + previousHash + data + timestamp).toString();

  static validateStructure = (aBlock: Block): boolean =>
    typeof aBlock.index === "number" &&
    typeof aBlock.hash === "string" &&
    typeof aBlock.previousHash === "string" &&
    typeof aBlock.timestamp === "number" &&
    typeof aBlock.data === "string";

  public index: number;
  public hash: string;
  public previousHash: string;
  public timestamp: number;
  public data: string;

  constructor(
    index: number,
    hash: string,
    previousHash: string,
    timestamp: number,
    data: string
  ) {
    this.index = index;
    this.hash = hash;
    this.previousHash = previousHash;
    this.timestamp = timestamp;
    this.data = data;
  }
}

const getBlockcahin = (): Block[] => blockchain;
const getLastestBlock = (): Block => blockchain[blockchain.length - 1];
const getNewTimeStamp = (): number => Math.round(new Date().getTime() / 1000);
const getHashforBlock = (aBlock: Block): string =>
  Block.caculateBlockHash(
    aBlock.index,
    aBlock.previousHash,
    aBlock.timestamp,
    aBlock.data
  );

// first block
const genesisBlock: Block = new Block(
  0,
  "axo9ra93hxa",
  "",
  1648708439,
  "Hello TS_Blockchain"
);
let blockchain: Block[] = [genesisBlock];
// blockchain.push("blablablabla")
// console.log(blockchain);

const createNewBlock = (data: string): Block => {
  const previousBlock: Block = getLastestBlock();
  const newIndex: number = previousBlock.index + 1;
  const newTimeStamp: number = getNewTimeStamp();
  const newHash: string = Block.caculateBlockHash(
    newIndex,
    previousBlock.hash,
    newTimeStamp,
    data
  );
  const newBlock: Block = new Block(
    newIndex,
    newHash,
    previousBlock.hash,
    newTimeStamp,
    data
  );
  addBlock(newBlock);
  return newBlock;
};

const isBlockValid = (candidateBlock: Block, previousBlock: Block): boolean => {
  if (!Block.validateStructure(candidateBlock)) {
    return false;
  } else if (previousBlock.index + 1 !== candidateBlock.index) {
    return false;
  } else if (previousBlock.hash !== candidateBlock.previousHash) {
    return false;
  } else if (getHashforBlock(candidateBlock) !== candidateBlock.hash) {
    return false;
  } else {
    return true;
  }
};

const addBlock = (candidataBlock: Block): void => {
  if (isBlockValid(candidataBlock, getLastestBlock())) {
    blockchain.push(candidataBlock);
  }
};

createNewBlock("Well done TS_Blockchain");
createNewBlock("Now it's done! TS_Blockchain");
createNewBlock("Bye TS_Blockchain");

console.log(getBlockcahin());
export {};
