import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Description from "./components/Description";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";
import Socials from "./components/Socials";
import Feedback from "./components/Feedback";
import AnimatedCursor from "react-animated-cursor";

function App() {
  return (
    <div>
      <AnimatedCursor
        innerSize={20}
        outerSize={19}
        color="223, 182, 63"
        outerAlpha={0.4}
        innerScale={0.7}
        outerScale={2}
      />
      <NavBar />
      <main>
        <div>
          <Home />
          <Description />
          <Projects />
          <Skills />
          <Achievements />
          <Socials />
          <Feedback />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
