import React from "react";

import App from "./app";

import App from "./app";

class Welcome extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  componentDidMount() {
    console.log("welcome mounted");
  }
  render() {
    return (
      <div>
        <div className="welcome-wrapper">
          <h1 className="test"> Welcomeee </h1>
        </div>
      </div>
    );
  }
}

export default Welcome;
