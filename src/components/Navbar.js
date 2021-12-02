import React, { useRef } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navRightRef = useRef(null);
  const navToggleRef = useRef(null);

  const toggleNavbar = () => {
    navRightRef.current.classList.toggle("active");
    navToggleRef.current.classList.toggle("active");
  };

  const closeHamMenu = () => {
    navRightRef.current.classList.remove("active");
    navToggleRef.current.classList.remove("active");
  };

  return (
    <div className="navbar">
      <div className="navLeft">
        <a onClick={closeHamMenu} href="#landing">
          <h1>Hrushikesh</h1>
        </a>
      </div>
      <div className="navRight" ref={navRightRef}>
        <a onClick={closeHamMenu} href="#about">
          About
        </a>
        <a onClick={closeHamMenu} href="#techStack">
          Tech Stack
        </a>
        <a onClick={closeHamMenu} href="#work">
          Experience
        </a>
        <a onClick={closeHamMenu} href="#projects">
          Projects
        </a>
        <a onClick={closeHamMenu} href="#contact">
          Contact
        </a>
        <Link to="resume">Resume</Link>
      </div>
      <div className="navToggle" ref={navToggleRef} onClick={toggleNavbar}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
    </div>
  );
};

export default Navbar;
