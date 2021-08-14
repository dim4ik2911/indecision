"use strict";

//JSX - javascript syntax extension
var app = {
  title: "Indecision app!",
  subtitle: "Let's try!",
  options: ["one", "two"]
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), app.subtitle && /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("p", null, app.options.length > 0 ? "Here are your options" : "No options"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));
var user = {
  name: "John",
  age: 27,
  location: "London"
};
var userName = "Mike";
var userAge = 17;
var userLocation = "Boston";

function getLocation(location) {
  if (location) {
    return /*#__PURE__*/React.createElement("p", null, "Location: ", location);
  }

  return undefined;
}

var count = 0;
var someId = "myidhere";

var addOne = function addOne() {
  console.log("addOne");
};

var subtractOne = function subtractOne() {
  console.log("subtractOne");
};

var resetOne = function resetOne() {
  console.log("resetOne");
};

var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Count: ", count), /*#__PURE__*/React.createElement("button", {
  onClick: addOne
}, "+1"), /*#__PURE__*/React.createElement("button", {
  onClick: subtractOne
}, "-1"), /*#__PURE__*/React.createElement("button", {
  onClick: resetOne
}, "Reset"));
console.log(templateTwo);
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
