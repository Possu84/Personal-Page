import React from "react";

import App from "./app";

import Project1 from "./project1";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Project1: false
    };
    this.toggleProject1 = this.toggleProject1.bind(this);
  }

  toggleProject1() {
    console.log("toggling the modal");
    this.setState({
      Project1: !this.state.Project1
    });
  }
  componentDidMount() {
    console.log("welcome mounted");
  }
  render() {
    return (
      <div>
        <div className="welcome-wrapper">
          <h1 className="test"> Welcomeee </h1>
          <div className="welcome-div">
            <h1 className="typewriter">
              Hello..... my name is Jonas.... and I make internet.... exiting ;)
            </h1>
            <button onClick={this.toggleProject1}> TEST </button>
            {this.state.Project1 && (
              <Project1 toggleProject1={this.toggleProject1} />
            )}{" "}
          </div>
        </div>
      </div>
    );
  }
}
/// The modal is rendered when this. state is true !!!!!
export default Welcome;
