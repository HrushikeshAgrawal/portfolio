import React, { useState, useRef } from "react";

import DoDeca from "./dodeca/DoDeca";

const TechStack = () => {
  const [techListStatus, setTechListStatus] = useState("Show");
  const wrapRef = useRef(null);

  const nomess = () => {
    wrapRef.current.classList.toggle("nomess");
    if (techListStatus === "Show") setTechListStatus("Hide");
    else setTechListStatus("Show");
  };

  return (
    <div className="section" id="techStack">
      <div className="content revealFromBottom">
        <div className="heading">
          <h1>Tech Stack</h1>
          <hr />
        </div>
        <div className="techFlex">
          <div className="techLeft">
            <p>Some of my favorite technologies I like to work with.</p>
            <p>(Hover for a surprise)</p>
            <button className="themeButton" id="techListBtn" onClick={nomess}>
              {techListStatus} simple list
            </button>
          </div>
          <div className="techRight">
            <div className="wrap" ref={wrapRef}>
              <DoDeca />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechStack;
