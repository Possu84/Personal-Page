import App from "./app";

import React from "react";

function ModalContact(props) {
  return (
    <div className="modalContact">
      <p> Upload new profile picture </p>
      <div onClick={props.toggleModalContact}>
        <p>Toggle </p>
      </div>
    </div>
  );
}

export default ModalContact;
