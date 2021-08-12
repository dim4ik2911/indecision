//JSX - javascript syntax extension
const app = {
  title: "Indecision app!",
  subtitle: "Let's try!",
  options: ["one", "two"],
};
const template = (
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

const user = {
  name: "John",
  age: 27,
  location: "London",
};
const userName = "Mike";
const userAge = 17;
const userLocation = "Boston";

function getLocation(location) {
  if (location) {
    return <p>Location: {location}</p>;
  }
  return undefined;
}
const templateTwo = (
  <div>
    <h1>{user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
