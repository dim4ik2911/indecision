"use strict";

//JSX - javascript syntax extension
var app = {
  title: "Indecision app!",
  subtitle: "Let's try!"
};
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, app.title), /*#__PURE__*/React.createElement("p", null, app.subtitle), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));
var user = {
  name: "John",
  age: 22,
  location: "London"
};
var userName = "Mike";
var userAge = 27;
var userLocation = "Boston";
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, user.name), /*#__PURE__*/React.createElement("p", null, "Age: ", userAge), /*#__PURE__*/React.createElement("p", null, "Location: ", userLocation));
var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
