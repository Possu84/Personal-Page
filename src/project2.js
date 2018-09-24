import App from "./app";

import React from "react";

function Project2(props) {
  return (
    <div className="modal">
      <p> Project2</p>
      <button onClick={props.toggleProject2}> close </button>
    </div>
  );
}

export default Project2;
