import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Description from "./components/Description";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Achievements from "./components/Achievements";

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
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
