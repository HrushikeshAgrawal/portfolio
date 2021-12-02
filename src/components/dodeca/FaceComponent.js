import React from "react";

const FaceComponent = ({ side, content }) => {
  return (
    <div className={`face ${side}`}>
      <h1>{content}</h1>
    </div>
  );
};

export default FaceComponent;
