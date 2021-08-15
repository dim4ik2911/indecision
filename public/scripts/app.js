"use strict";

var appRoot = document.getElementById("app");

var changingView = function changingView() {
  visibility = !visibility;
  render();
};

var visibility = false;

var render = function render() {
  var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Visibility Toggle"), /*#__PURE__*/React.createElement("button", {
    onClick: changingView
  }, visibility ? "Hide details" : "Show details"), visibility && /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", null, "Hey. Here I am")));
  ReactDOM.render(template, appRoot);
};

render();
