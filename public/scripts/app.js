"use strict";

var _arguments = typeof arguments === "undefined" ? void 0 : arguments;

// arguments object - no longer bound with arrow functions
var add = function add(a, b) {
  console.log(arguments);
  return a + b;
};

var add2 = function add2(a, b) {
  console.log(_arguments);
  return a + b;
}; //works


console.log(add(2, 5)); //does not work

console.log(add2(2, 6)); // this keyword - no longer bound

var user = {
  name: "Andrew",
  cities: ["Boston", "New York", "Dublin"],
  printPlacesLived: function printPlacesLived() {
    var andrewsCities = this.cities.map(function (city) {
      return "Andrew lived in ".concat(city);
    });
    return andrewsCities;
  }
};
console.log(user.printPlacesLived()); //Challenge area

var multiplier = {
  numbers: [1, 2, 3],
  multiplyBy: 2,
  multiply: function multiply() {
    var _this = this;

    return this.numbers.map(function (number) {
      return number * _this.multiplyBy;
    });
  }
};
console.log(multiplier.multiply());
