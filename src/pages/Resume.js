import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import pdfLight from "../assets/Hrushikesh Resume.pdf";
import pdfDark from "../assets/Hrushikesh Resume Dark.pdf";

const Resume = () => {
  const [pdfAltTheme, setPdfAltTheme] = useState("Dark");

  const navRightRef = useRef(null);
  const navToggleRef = useRef(null);
  const pdfRef = useRef(null);

  const toggleNavbar = () => {
    navRightRef.current.classList.toggle("active");
    navToggleRef.current.classList.toggle("active");
  };

  const toggltPdfs = () => {
    if (pdfAltTheme === "Dark") {
      pdfRef.current.src = pdfDark;
      setPdfAltTheme("Light");
    } else if (pdfAltTheme === "Light") {
      pdfRef.current.src = pdfLight;
      setPdfAltTheme("Dark");
    }
    navRightRef.current.classList.remove("active");
    navToggleRef.current.classList.remove("active");
  };

  return (
    <>
      <div className="navbar">
        <div className="navLeft">
          <Link to="">
            <h1>Hrushikesh</h1>
          </Link>
        </div>
        <div className="navRight" ref={navRightRef}>
          {/* eslint-disable-next-line*/}
          <a href="#" onClick={toggltPdfs} id="toggleBtn">
            Make it {pdfAltTheme}
          </a>
          <Link to="">Back to portfolio</Link>
        </div>
        <div className="navToggle" ref={navToggleRef} onClick={toggleNavbar}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>

      <div className="section" id="resume">
        <div className="content">
          <div className="heading">
            <hr />
          </div>
          <iframe
            ref={pdfRef}
            src={pdfLight}
            className="pdf"
            frameborder="0"
            allowfullscreen
            title="pdf"
          ></iframe>
        </div>
      </div>
    </>
  );
};

export default Resume;
