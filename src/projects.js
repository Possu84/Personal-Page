import React from "react";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  componentDidMount() {
    console.log("projects mounted");
  }
  render() {
    return (
      <div id="projects-wrapper">
        <h1> Pro </h1>
      </div>
    );
  }
}

export default Projects;
