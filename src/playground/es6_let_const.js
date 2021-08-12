var nameVar = "Andrew";
var nameVar = "Mike";
console.log("nameVar", nameVar);

let nameLet = "Jane";
nameLet = "Julie";
console.log("nameLet", nameLet);

const nameConst = "Smith";
console.log("nameConst", nameConst);

// Block scoping
var fullName = "Andrew Redas";
let firstName;
if (fullName) {
  firstName = fullName.split(" ")[0];
  console.log(firstName);
}
console.log(firstName);
