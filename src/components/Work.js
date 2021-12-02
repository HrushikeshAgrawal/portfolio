import React, { useState } from "react";

import workData from "../assets/workData.json";

const Work = () => {
  const [selectedWorkIndex, setSelectedWorkIndex] = useState(0);

  return (
    <div className="section" id="work">
      <div className="content revealFromBottom">
        <div className="heading">
          <h1>Work Experience</h1>
          <hr />
        </div>
        <div className="workFlex">
          <div className="workLeft">
            <div className="btnColumn">
              {workData.map((workItem, index) => (
                <button
                  key={index}
                  className={index === selectedWorkIndex ? "selected" : ""}
                  onClick={() => setSelectedWorkIndex(index)}
                >
                  {workItem.company}
                </button>
              ))}
            </div>
          </div>

          <div className="workMid">
            <h1>{workData[selectedWorkIndex].position}</h1>
            <p className="duration">{workData[selectedWorkIndex].duration}</p>
            <ul className="desc fa-ul">
              {workData[selectedWorkIndex].desc.map((t, index) => (
                <li key={index}>
                  <span className="fa-li">
                    <i className="fas fa-angle-right"></i>
                  </span>
                  {t}
                </li>
              ))}
            </ul>
          </div>

          <div className="workRight">
            <h1>Technologies Used</h1>
            <div className="techs">
              {workData[selectedWorkIndex].technologies.map((tech, index) => (
                <p key={index}>{tech}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
