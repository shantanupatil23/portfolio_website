import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Description from "./components/Description";
import Projects from "./components/Projects";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <div>
          <Home />
          <Description />
          <Projects />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
