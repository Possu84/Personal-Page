import App from "./app";

import React from "react";

function Modal2(props) {
  return (
    <div className="modal">
      <p> Upload new MODAL"""""222222 picture </p>
      <div onClick={props.toggleModal2}>
        <p>Toggle </p>
      </div>
    </div>
  );
}

export default Modal2;
