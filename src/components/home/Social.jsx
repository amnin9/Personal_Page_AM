import React from "react";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://www.instagram.com/alenm9/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-instagram"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/alenmkhitaryan9/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="bx bxl-linkedin-square"></i>
      </a>
      <a
        href="https://github.com/amnin9"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github-alt"></i>
      </a>
    </div>
  );
};

export default Social;
