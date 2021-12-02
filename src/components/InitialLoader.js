import React, { useEffect, useState, useRef } from "react";

const InitialLoader = () => {
  const initialLoaderRef = useRef(null);
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const mainPage = document.getElementsByClassName("mainPage")[0];
    mainPage.style.display = "none";
    typeInitialLoader(0);
    // eslint-disable-next-line
  }, []);

  const typeInitialLoader = (i) => {
    const loaderText = "Hrushikesh Agrawal.";
    if (i < loaderText.length) {
      setDisplayText(loaderText.slice(0, i + 1));
      setTimeout(() => {
        typeInitialLoader(i + 1);
      }, 150);
    } else {
      setTimeout(() => {
        const mainPage = document.getElementsByClassName("mainPage")[0];
        initialLoaderRef.current.style.opacity = "0";
        initialLoaderRef.current.addEventListener("transitionend", (e) => {
          initialLoaderRef.current.style.display = "none";
          mainPage.style.display = "block";
          window.scrollTo(0, 1);
        });
      }, 1000);
    }
  };
  return (
    <div className="initialLoader" ref={initialLoaderRef}>
      <h1 id="initialLoaderText">{displayText}</h1>
    </div>
  );
};

export default InitialLoader;
