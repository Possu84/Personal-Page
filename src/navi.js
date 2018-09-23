import React from "react";

function Navi() {
  return (
    <div>
      <header>
        <div className="navi_container">
          <a href="/">
            <p className="navi_text">Home</p>
          </a>
          <a href="/contact">
            <p className="navi_text">Contact</p>
          </a>
          <a href="/projects">
            <p className="navi_text">Online</p>
          </a>
          <a href="/bio">
            <p className="navi_text">Bio</p>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navi;
