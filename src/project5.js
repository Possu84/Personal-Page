import App from "./app";

import React from "react";

function Project5(props) {
  return (
    <div className="modal">
      <p> UProject5 </p>
      <div onClick={props.toggleModal}>
        <p>Toggle </p>
      </div>
    </div>
  );
}

export default Project5;
