// interface
interface Human {
  name: string;
  age: number;
  gender: string;
}

const person = {
  name: "roki",
  age: 29,
  gender: "male",
};

// class
class Human {
  public name: string;
  public age: number;
  public gender: string;

  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const toki = new Human("toki", 28, "femle");

const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, ang you are ${person.gender}`;
};

console.log(sayHi(person));
console.log(sayHi(toki));

export {};
