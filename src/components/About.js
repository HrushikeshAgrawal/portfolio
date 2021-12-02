import React from "react";

const About = () => {
  return (
    <div className="section" id="about">
      <div className="content revealFromBottom">
        <div className="heading">
          <h1>About Me</h1>
          <hr />
        </div>
        <div className="aboutFlex">
          <div className="aboutLeft">
            <p>
              Hello! My name is Hrushikesh and I love creating things for the
              internet
              <span className="highLight">
                {" "}
                <i className="fas fa-laugh-beam"></i>{" "}
              </span>
              I have a Bachelor in
              <span className="highLight"> Information Technology </span>
              degree but most of my knowledge comes from experience while
              building websites and apps for various startups. Drop a
              <span className="highLight">
                <a href="#contact"> Hello </a>
              </span>
              if you have some project idea and need help with web/app part
              <span className="highLight">
                {" "}
                <i className="fas fa-smile-wink"></i>
              </span>
            </p>
            <p>
              I have a diverse set of skills, including everything from
              designing the
              <span className="highLight"> UI-UX</span>, designing the
              <span className="highLight"> Database</span>, developing the
              <span className="highLight"> Frontend</span> and
              <span className="highLight"> Backend</span>, all the way up to
              <span className="highLight"> Deployment</span>.
            </p>
            <p className="noPy">
              P.S.
              <br />I don't like Python <i className="fab fa-python"></i>
              <br />
              JavaScript <i className="fab fa-js-square"></i> is the best :D
            </p>
          </div>
          <div className="aboutRight">
            <div className="myImg"></div>
            <div className="myImgSquare"></div>
            <div className="myImgSmallSquare"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
