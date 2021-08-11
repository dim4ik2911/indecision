"use strict";

//JSX - javascript syntax extension
var template = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Indecision app"), /*#__PURE__*/React.createElement("p", null, "Some text"), /*#__PURE__*/React.createElement("ol", null, /*#__PURE__*/React.createElement("li", null, "Item one"), /*#__PURE__*/React.createElement("li", null, "Item two")));
var templateTwo = /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Dmitrijs Paklons"), /*#__PURE__*/React.createElement("p", null, "Age: 23"), /*#__PURE__*/React.createElement("p", null, "Location: Rezekne"));
var appRoot = document.getElementById("app");
ReactDOM.render(templateTwo, appRoot);
