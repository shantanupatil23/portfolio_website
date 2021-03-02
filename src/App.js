import React from "react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <NavBar />
      <main>
        <div>
          <Home/>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;
