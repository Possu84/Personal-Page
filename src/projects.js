import React from "react";

import App from "./app";

import Modal from "./modal";

import Project1 from "./project1";

import Modal2 from "./modal2";

class Projects extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      modal2: false,
      project1: false
    };
    this.toggleModal = this.toggleModal.bind(this);

    this.toggleModal2 = this.toggleModal2.bind(this);

    this.toggleProject1 = this.toggleProject1.bind(this);
  }
  toggleModal() {
    console.log("toggling the modal1");
    this.setState({
      modal: !this.state.modal
    });
  }
  toggleModal2() {
    console.log("toggling the modal2");
    this.setState({
      modal2: !this.state.modal2
    });
  }
  toggleProject1() {
    console.log("toggling the project1");
    this.setState({
      project1: !this.state.project1
    });
  }
  componentDidMount() {
    console.log("Projects mounted");
  }
  render() {
    return (
      <div>
        <div className="welcome-wrapper">
          <h1 className="test"> Projects </h1>
          <button onClick={this.toggleModal}> TEST </button>
          {this.state.modal && <Modal />}
          <button onClick={this.toggleModal2}> TEST </button>
          {this.state.modal2 && <Modal2 />}
          <button onClick={this.toggleProject1}> project </button>
          {this.state.project1 && <Project1 />}
        </div>
      </div>
    );
  }
}
/// The modal is rendered when this. state is true !!!!!
export default Projects;
