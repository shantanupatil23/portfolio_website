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

function App() {
  return (
    <div>
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
