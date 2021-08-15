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

let count = 0;
const someId = "myidhere";
const addOne = () => {
  count++;
  renderCounterApp();
};

const subtractOne = () => {
  count--;
  renderCounterApp();
};

const resetOne = () => {
  count = 0;
  renderCounterApp();
};

const appRoot = document.getElementById("app");

const renderCounterApp = () => {
  const templateTwo = (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={addOne}>+1</button>
      <button onClick={subtractOne}>-1</button>
      <button onClick={resetOne}>Reset</button>
    </div>
  );

  ReactDOM.render(templateTwo, appRoot);
};

renderCounterApp();
