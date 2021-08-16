class Person {
  constructor(name = "Anonymous", age = 0) {
    this.name = name;
    this.age = age;
  }
  getGretting() {
    return `Hi, I am ${this.name} by the way... `;
  }
  getDescription() {
    return `${this.name} is ${this.age} year(s) old!`;
  }
}

class Student extends Person {
  constructor(name, age, major) {
    super(name, age);
    this.major = major;
  }
  hasMajor() {
    return !!this.major;
  }
  getDescription() {
    let description = super.getDescription();

    if (this.hasMajor()) {
      description += `Their major is ${this.major}.`;
    }

    return description;
  }
}
const me = new Student("Dmitrijs Paklons", undefined, "Computer Science");
console.log(me.getDescription());

const other = new Student();
console.log(other.getDescription());

class Traveler extends Person {
  constructor(name, age, homeLocation) {
    super(name, age);
    this.homeLocation = homeLocation;
  }
  hasHomeLocation() {
    return !!this.homeLocation;
  }
  getGreeting() {
    let greeting = super.getGretting();
    if (this.hasHomeLocation()) {
      greeting += `I am visiting from ${this.homeLocation}`;
    }
    return greeting;
  }
}

const orlik = new Traveler("Alex", 22, "Philadelphia");
console.log(orlik.getGreeting());

const mady = new Traveler("Mady", 33);
console.log(mady.getGreeting());
