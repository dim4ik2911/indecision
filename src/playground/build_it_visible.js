class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleToggleVisibility() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility,
      };
    });
  }
  render() {
    return (
      <div>
        <h1>Visibility Toggle</h1>
        <button onClick={this.handleToggleVisibility}>
          {this.state.visibility ? "Hide details" : "Show details"}
        </button>
        {this.state.visibility && <p>Hey, that's my details</p>}
      </div>
    );
  }
}

ReactDOM.render(<VisibilityToggle />, document.getElementById("app"));

// const appRoot = document.getElementById("app");

// const changingView = () => {
//   visibility = !visibility;
//   render();
// };

// let visibility = false;
// const render = () => {
//   const template = (
//     <div>
//       <h1>Visibility Toggle</h1>
//       <button onClick={changingView}>
//         {visibility ? "Hide details" : "Show details"}
//       </button>
//       {visibility && (
//         <div>
//           <p>Hey. Here I am</p>
//         </div>
//       )}
//     </div>
//   );

//   ReactDOM.render(template, appRoot);
// };
// render();
