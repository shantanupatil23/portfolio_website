import React from "react";
import img_react from "../assets/skills/img_react.png";
import img_flutter from "../assets/skills/img_flutter.png";
import img_android from "../assets/skills/img_android.png";
import img_javascript from "../assets/skills/img_javascript.png";

// const skills = [
//   "Flutter",
//   "Dart",
//   "Android development",
//   "Android SDK",
//   "HTML5",
//   "CSS",
//   "BootStrap",
//   "JavaScript",
//   "Java",
//   "DOM",
//   "JQuerry",
//   "Unix",
//   "Linux",
//   "Node.js",
//   "Express.js",
//   "API",
//   "Google",
//   "API",
//   "Git",
//   "Github",
//   "SQL",
//   "NoSQL",
//   "MongoDB",
//   "REST",
//   "Database Security",
//   "Cookies",
//   "Passport",
//   "ReactJS",
//   "React.js",
//   "CPP",
//   "Python",
//   "C",
//   "Photoshop",
//   "Adobe Photoshop",
//   "Lightroom",
//   "Figma",
//   "Adobe XD",
// ];

function Skills() {
  return (
    <section id="skills">
      <h1 className="skillsText">Skills</h1>
      <div className="row skillsRowBig">
        <img className="skillsImageBigSide" src={img_javascript} alt="JS" />
        <img className="skillsImageBigCenter" src={img_react} alt="React" />
        <img className="skillsImageBigCenter" src={img_flutter} alt="Flutter" />
        <img className="skillsImageBigSide" src={img_android} alt="Android" />
      </div>
      <p>
        Flutter Dart Android development Android SDK XML Java <br /> Android
        Studio VSCode HTML5 CSS BootStrap JavaScript Java DOM JQuerry Unix Linux
        Node.js <br /> Express.js API Google API Git Github SQL NoSQL MongoDB
        REST Database Security Cookies <br /> Passport ReactJS React.js CPP
        Python C Photoshop Adobe Photoshop Lightroom Figma Adobe XD <br /> IOT
        Arduino ArduinoIDE NodeMCU ESP8266 IOT Sensors
      </p>
    </section>
  );
}

export default Skills;
