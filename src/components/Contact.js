import React from "react";

const Contact = () => {
  return (
    <div className="section autoHeightSection" id="contact">
      <div className="content revealFromBottom contact">
        <div className="heading">
          <h1>Contact Me</h1>
          <hr />
        </div>
        <p>
          Have a project idea and need some help? Or just want to chat? Just
          message me and I'll get back to you as soon as I can! :D
        </p>
        <a
          href="mailto:hrushikesh.ma@somaiya.edu"
          target="_blank"
          rel="noreferrer"
        >
          <button className="themeButton">Say Hello! :D</button>
        </a>
      </div>
    </div>
  );
};

export default Contact;
