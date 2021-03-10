import React from "react";
import img_shantanu from "../assets/description/img_shantanu.jpg";
import img_browser from "../assets/description/img_browser.png";

function Description() {
  return (
    <section id="description">
      <img className="img_shantanu" src={img_shantanu} alt="shantanu" />
      <h1 className="name_text">Shantanu Patil</h1>
      <p className="description_text">
      A pre-final year CS student and a freelancer currently living in Pune. Having 3 years of experience as a Native Android Developer or a Flutter Developer. Recently, I've stepped onto the track of full-stack Web Development and I'm going one step ahead every single day.
      </p>
      <img className="img_browser_description" src={img_browser} alt="browser" />
    </section>
  );
}

export default Description;
