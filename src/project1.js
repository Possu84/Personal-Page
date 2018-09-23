import App from "./app";

import React from "react";

function Project1(props) {
  return (
    <div className="modal">
      <p> Project1 </p>
      <div onClick={props.toggleProject1}>
        <p>Toggle </p>
      </div>
    </div>
  );
}

export default Project1;
