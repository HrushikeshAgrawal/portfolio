import React from "react";

import InitialLoader from "../components/InitialLoader";
import About from "../components/About";
import Landing from "../components/Landing";
import Navbar from "../components/Navbar";
import TechStack from "../components/TechStack";
import Work from "../components/Work";
import Projects from "../components/Projects";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  const scrollToElement = (id) => {
    var elmnt = document.getElementById(id);
    elmnt.scrollIntoView();
  };

  return (
    <>
      <InitialLoader />
      <div className="mainPage">
        <Navbar />
        <Landing scrollToElement={scrollToElement} />
        <About className="displaysr" />
        <TechStack />
        <Work />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
