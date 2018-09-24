import React from "react";

import App from "./app";

class Contacts extends React.Component {
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
        <div className="main-wrapper">
          <h1 className="test"> Welcomeee </h1>
          <div className="welcome-div">
            <h1> Contact </h1>
            <h1> Links:</h1>
            <p>
              {" "}
              GitHub: <a href="https://github.com/Possu84">
                {" "}
                my github page
              </a>{" "}
            </p>
            <p>
              {" "}
              LinkedIn:{" "}
              <a href="https://www.linkedin.com/in/jonas-pooters-8539076/">
                {" "}
                My linked in
              </a>{" "}
            </p>
            <button onClick={this.toggleModal}> TEST </button>
            {this.state.modal && <Modal />}{" "}
          </div>
        </div>
      </div>
    );
  }
}
/// The modal is rendered when this. state is true !!!!!
export default Contacts;
