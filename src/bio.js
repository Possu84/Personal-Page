import React from "react";

import App from "./app";

import Project1 from "./project1";

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project1: false
    };
    this.toggleProject1 = this.toggleProject1.bind(this);
  }
  toggleProject1() {
    console.log("toggling the project1");
    this.setState({
      project1: !this.state.project1
    });
  }
  componentDidMount() {
    console.log("welcome mounted");
  }
  render() {
    return (
      <div>
        <div className="welcome-wrapper">
          <h1 className="test"> Bio </h1>
          <div className="welcome-div">
            <button onClick={this.toggleProject1}> TEST </button>
            {this.state.project1 && (
              <Project1 toggleProject1={this.toggleProject1} />
            )}{" "}
          </div>
        </div>
      </div>
    );
  }
}
/// The modal is rendered when this. state is true !!!!!
export default Bio;
