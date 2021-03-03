import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Description from "./components/Description";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <div>
          <Home/>
          <Description/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
