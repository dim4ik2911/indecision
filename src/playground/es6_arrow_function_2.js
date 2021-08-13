// arguments object - no longer bound with arrow functions

const add = function (a, b) {
  console.log(arguments);
  return a + b;
};
const add2 = (a, b) => {
  console.log(arguments);
  return a + b;
};

//works
console.log(add(2, 5));
//does not work
console.log(add2(2, 6));

// this keyword - no longer bound
const user = {
  name: "Andrew",
  cities: ["Boston", "New York", "Dublin"],
  printPlacesLived() {
    const andrewsCities = this.cities.map((city) => {
      return `Andrew lived in ${city}`;
    });
    return andrewsCities;
  },
};

console.log(user.printPlacesLived());

//Challenge area
const multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply() {
    return this.numbers.map((number) => number * this.multiplyBy);
  },
};

console.log(multiplier.multiply());
