import React from "react";
import img_shantanu from "../assets/img_shantanu.jpg";
import img_browser from "../assets/img_browser.png";

function Description() {
  return (
    <section id="description">
      <img className="img_shantanu" src={img_shantanu} alt="shantanu" />
      <h1 className="name_text">Shantanu Patil</h1>
      <p className="description_text">
        Currently pursuing bachelors in CSE. I've worked on projects based on
        IOT to practice my knowledge of Arduino Boards and sensors and I've also
        worked on Android Development and Python Programming. I enjoy taking
        part in competitive programming as a hobby and apart from that, I am a
        big fan of motorsport.
      </p>
      <img className="img_browser_description" src={img_browser} alt="browser" />
    </section>
  );
}

export default Description;
