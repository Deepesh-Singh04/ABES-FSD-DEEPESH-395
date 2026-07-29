let person = {
  name: "CJ",
  age: 25,
  greet() {
    console.log(`Hello, I'm ${this.name}`);
  },
  getAge() {
    console.log(`I am ${this.age} years old`);
  }
};   
person.greet();
person.getAge();