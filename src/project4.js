import App from "./app";

import React from "react";

function Project4(props) {
  return (
    <div className="modal">
      <p> Project4 </p>
      <div onClick={props.toggleModal}>
        <p>Toggle </p>
      </div>
    </div>
  );
}

export default Project4;
