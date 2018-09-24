import App from "./app";

import React from "react";

function Project1(props) {
  return (
    <div className="modal">
      <p> Project1</p>
      <button onClick={props.toggleProject1}> close </button>
    </div>
  );
}

export default Project1;
