const appRoot = document.getElementById("app");

const changingView = () => {
  visibility = !visibility;
  render();
};

let visibility = false;
const render = () => {
  const template = (
    <div>
      <h1>Visibility Toggle</h1>
      <button onClick={changingView}>
        {visibility ? "Hide details" : "Show details"}
      </button>
      {visibility && (
        <div>
          <p>Hey. Here I am</p>
        </div>
      )}
    </div>
  );

  ReactDOM.render(template, appRoot);
};
render();
