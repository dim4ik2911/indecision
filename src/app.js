//JSX - javascript syntax extension
var app = {
  title: "Indecision app!",
  subtitle: "Let's try!",
  options: ["one", "two"],
};
var template = (
  <div>
    <h1>{app.title}</h1>
    {app.subtitle && <p>{app.subtitle}</p>}
    <p>{app.options.length > 0 ? "Here are your options" : "No options"}</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var user = {
  name: "John",
  age: 27,
  location: "London",
};
var userName = "Mike";
var userAge = 17;
var userLocation = "Boston";

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
  return undefined;
}
var templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
