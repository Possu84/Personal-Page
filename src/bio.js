import React from "react";

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  componentDidMount() {
    console.log("Bio mounted");
  }
  render() {
    return (
      <div>
        <h1> Bio </h1>
      </div>
    );
  }
}

export default Bio;
