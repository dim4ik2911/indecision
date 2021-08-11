//JSX - javascript syntax extension
var app = {
  title: "Indecision app!",
  subtitle: "Let's try!",
};
var template = (
  <div>
    <h1>{app.title}</h1>
    <p>{app.subtitle}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "John",
  age: 22,
  location: "London",
};
var userName = "Mike";
var userAge = 27;
var userLocation = "Boston";
var templateTwo = (
  <div>
    <h1>{user.name}</h1>
    <p>Age: {userAge}</p>
    <p>Location: {userLocation}</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
