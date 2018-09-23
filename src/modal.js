import App from "./app";

import React from "react";

function Modal(props) {
  return (
    <div className="modal">
      <p> Upload new profile picture </p>
      <div onClick={props.toggleModal}>
        <p>Toggle </p>
      </div>
    </div>
  );
}

export default Modal;
