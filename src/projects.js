import React from "react";

import App from "./app";

import Project1 from "./project1";

import Project2 from "./project2";

import Project3 from "./project3";

import Project4 from "./project4";

import Project5 from "./project5";

import Project6 from "./project6";

import ProjectContainerModule from "./project-container-component";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      project1: false,
      project2: false,
      project3: false,
      project4: false,
      project5: false,
      project6: false
    };
    this.toggleProject1 = this.toggleProject1.bind(this);

    this.toggleProject2 = this.toggleProject2.bind(this);

    this.toggleProject3 = this.toggleProject3.bind(this);

    this.toggleProject4 = this.toggleProject4.bind(this);

    this.toggleProject5 = this.toggleProject5.bind(this);

    this.toggleProject6 = this.toggleProject6.bind(this);
  }

  toggleProject1() {
    console.log("toggling the project1");
    this.setState({
      project1: !this.state.project1
    });
  }
  toggleProject2() {
    console.log("toggling the project2");
    this.setState({
      project2: !this.state.project2
    });
  }
  toggleProject3() {
    console.log("toggling the project3");
    this.setState({
      project3: !this.state.project3
    });
  }
  toggleProject4() {
    console.log("toggling the project4");
    this.setState({
      project4: !this.state.project4
    });
  }
  toggleProject5() {
    console.log("toggling the project5");
    this.setState({
      project5: !this.state.project5
    });
  }
  toggleProject6() {
    console.log("toggling the project6");
    this.setState({
      project6: !this.state.project6
    });
  }

  componentDidMount() {
    console.log("Projects mounted");
  }
  render() {
    return (
      <div>
        <div className="project-wrapper">
          <div className="project-flow">
            <div onClick={this.toggleProject1}>
              <ProjectContainerModule />
            </div>

            <div onClick={this.toggleProject2}>
              <ProjectContainerModule />
            </div>

            <div onClick={this.toggleProject3}>
              <ProjectContainerModule />
            </div>

            <div onClick={this.toggleProject4}>
              <ProjectContainerModule />
            </div>

            <div onClick={this.toggleProject5}>
              <ProjectContainerModule />
            </div>

            <div onClick={this.toggleProject6}>
              <ProjectContainerModule />
            </div>

            {this.state.project1 && (
              <Project1 toggleProject1={this.toggleProject1} />
            )}
            {this.state.project2 && (
              <Project2 toggleProject2={this.toggleProject2} />
            )}
            {this.state.project3 && (
              <Project3 toggleProject3={this.toggleProject3} />
            )}
            {this.state.project4 && (
              <Project4 toggleProject4={this.toggleProject4} />
            )}
            {this.state.project5 && (
              <Project5 toggleProject5={this.toggleProject5} />
            )}
            {this.state.project6 && (
              <Project6 toggleProject6={this.toggleProject6} />
            )}
          </div>
        </div>
      </div>
    );
  }
}
/// The modal is rendered when this. state is true !!!!!
export default Projects;
