import React from "react";
import "./Project.css";
import keeperbg from "../assets/projects/keeperbg.png";

export default function Keeper() {
  return (
    <div className="project keeper">
      <img src={keeperbg} alt="bg" />
      <p className="content">
        A simple note taking app to practice my knowledge on Full Stack Web Development.
      </p>
    </div>
  );
}
