import React from "react";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }
  componentDidMount() {
    console.log("Contact mounted");
  }
  render() {
    return (
      <div id="contact-wrapper">
        <h1> Contact </h1>
      </div>
    );
  }
}

export default Contact;
