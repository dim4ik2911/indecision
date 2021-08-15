const appRoot = document.getElementById("app");

let count = 0;

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
