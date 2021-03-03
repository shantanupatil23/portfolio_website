import React from "react";
import img_browser from "../assets/home/img_browser.png";
import img_phone from "../assets/home/img_phone.png";
import img_aurora from "../assets/home/img_aurora.jpg";

function Home() {
  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${img_aurora})`,
      }}
    >
      <h1 className="intro_text">
        Hi,
        <br />
        I'm Shantanu
        <br />
        an App Developer.
      </h1>
      <img className="img_browser" src={img_browser} alt="browser" />
      <img className="img_phone" src={img_phone} alt="phone" />
    </section>
  );
}

export default Home;
