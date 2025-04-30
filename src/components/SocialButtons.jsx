import React from "react";
import "../css/SocialButtons.css";

const SocialButtons = () => {
  return (
    <div className="buttons-container">
      <a
        href="https://github.com/Lusaenz"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <i className="fi fi-brands-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/lusaenz-gamedev/"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <i className="fi fi-brands-linkedin"></i>
      </a>
      <a
        href="https://lusaenz.itch.io"
        target="_blank"
        rel="noopener noreferrer"
        className="btn"
      >
        <i className="fi fi-rr-gamepad"></i>
      </a>
      <a
        href="/public/mi-cv.pdf"
        download="mi-cv.pdf"
        className="btn"
      >
        <i className="fi fi-rr-file-pdf"></i>
      </a>
    </div>
  );
};

export default SocialButtons;
