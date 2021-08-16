class IndecisionApp extends React.Component {
  render() {
    const title = "Indecision";
    const subtitle = "Put your life in the hands of a computer";
    const options = ["Thing one", "Thing two", "Thing four"];
    return (
      <div>
        <Header title={title} subtitle={subtitle} />
        <Action />
        <Options options={options} />
        <AddOption />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <h2>{this.props.subtitle}</h2>
      </div>
    );
  }
}

class Action extends React.Component {
  handlePick() {
    alert("Handle Pick");
  }
  render() {
    return <button onClick={this.handlePick}>What should I do?</button>;
  }
}

class Options extends React.Component {
  removeAllButton() {
    alert("Soon I will remove it!");
  }
  render() {
    return (
      <div>
        <button onClick={this.removeAllButton}>Remove All</button>
        {this.props.options.map((option) => (
          <Option key={option} optionText={option} />
        ))}
      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return <p>Option: {this.props.optionText}</p>;
  }
}

class AddOption extends React.Component {
  handleAddOption(e) {
    e.preventDefault();
    const option = e.target.elements.option.value.trim();

    if (option) {
      alert(option);
      e.target.elements.option.value = "";
    }
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        <input type="text" name="option" />
        <button>Add Option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
