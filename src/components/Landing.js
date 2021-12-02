import React from "react";

const Landing = ({ scrollToElement }) => {
  return (
    <div className="section" id="landing">
      <div className="content" id="landingContent">
        <h1 className="heroTextHi revealFromBottom">Hi, I am</h1>
        <h1 className="heroTextName revealFromBottom">Hrushikesh Agrawal</h1>
        <h1 className="heroTextPosition revealFromBottom">
          A Full Stack Developer.
        </h1>
        <p className="heroTextDesc revealFromBottom">
          Web and Mobile App Developer based in India. If I am not freelancing
          at some company, I'm working on some personal project or just helping
          a startup out :D
        </p>

        <button
          className="themeButton revealFromBottom"
          onClick={() => scrollToElement("about")}
        >
          More About Me
        </button>
        <div className="landingFloater">
          <div className="eyes">
            <div className="eye"></div>
            <div className="eye"></div>
          </div>
          <div className="mouth">
            <div className="smile"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
