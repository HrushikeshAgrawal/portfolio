import React from "react";
import FaceComponent from "./FaceComponent";

const DoDeca = () => {
  const faceList = [
    { side: "front", content: "HTML, CSS" },
    { side: "back", content: "Mongo DB" },
    { side: "left", content: "Reach Native" },
    { side: "right", content: "React JS" },

    { side: "fl", content: "Expo" },
    { side: "fr", content: "JavaScript" },
    { side: "bl", content: "Angular JS" },
    { side: "br", content: "Express JS" },

    { side: "ft", content: "MySQL" },
    { side: "bt", content: "MERN Stack" },
    { side: "lt", content: "C++" },
    { side: "rt", content: "Java" },

    { side: "fb", content: "Solidity" },
    { side: "bb", content: "web3" },
    { side: "lb", content: "Python" },
    { side: "rb", content: "Node JS" },

    { side: "top", content: "php" },
    { side: "bottom", content: "Ethereum" },
  ];

  return (
    <div className="dodeca">
      {faceList.map(({ side, content }, index) => (
        <FaceComponent key={index} side={side} content={content} />
      ))}

      <div className="smallface smallfront"></div>
      <div className="smallface smallright"></div>
      <div className="smallface smallback"></div>
      <div className="smallface smallleft"></div>
      <div className="smallface smalltop"></div>
      <div className="smallface smallbottom"></div>
    </div>
  );
};

export default DoDeca;
