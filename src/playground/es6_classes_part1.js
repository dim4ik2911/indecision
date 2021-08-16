class Person {
  constructor(name = "life", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi, I am ${this.name} by the way`;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old!`;
  }
}

const me = new Person("Dmitrijs Paklons", 25);
console.log(me.getDescription());

const other = new Person();
console.log(other.getDescription());
