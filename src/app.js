//JSX - javascript syntax extension
var template = (
  <div>
    <h1>Indecision app</h1>
    <p>Some text</p>
    <ol>
      <li>Item one</li>
      <li>Item two</li>
    </ol>
  </div>
);

var templateTwo = (
  <div>
    <h1>Dmitrijs Paklons</h1>
    <p>Age: 23</p>
    <p>Location: Rezekne</p>
  </div>
);

var appRoot = document.getElementById("app");

ReactDOM.render(templateTwo, appRoot);
