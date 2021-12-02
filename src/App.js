import React from "react";
import { Route, BrowserRouter as Router } from "react-router-dom";

import Home from "./pages/Home";
import Resume from "./pages/Resume";

const App = () => {
  const applyCursorRippleEffect = (e) => {
    const ripple = document.createElement("div");

    ripple.className = "ripple";
    document.body.appendChild(ripple);

    ripple.style.left = `${e.clientX}px`;
    ripple.style.top = `${e.clientY}px`;
    ripple.style.animation = `ripple-effect .4s  linear`;
    ripple.onanimationend = () => {
      document.body.removeChild(ripple);
    };
  };

  return (
    <Router>
      <div onClick={(event) => applyCursorRippleEffect(event)}>
        <Route exact path="/" component={Home} />
        <Route exact path="/resume" component={Resume} />
      </div>
    </Router>
  );
};

export default App;
