import React from "react";

import App from "./app";

import Modal from "./modal";

class Bio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal() {
    console.log("toggling the modal");
    this.setState({
      modal: !this.state.modal
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
            <button onClick={this.toggleModal}> TEST </button>
            {this.state.modal && <Modal />}{" "}
          </div>
        </div>
      </div>
    );
  }
}
/// The modal is rendered when this. state is true !!!!!
export default Bio;
