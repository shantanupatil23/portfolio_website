import React from "react";
import "./Project.css";
import busifybg from "../assets/projects/busifybg.png";

export default function Busify() {
  return (
    <div className="project busify">
      <div className="row">
        <p className="title">Busify</p>
        <p className="purpose">College Project</p>
      </div>
      <img src={busifybg} alt="bg" />
      <p className="content">
        The basic idea behind this project is to develop an application to help
        students track and manage their college bus timings/route. By using this
        app, students will be able to track the location of their respective bus
        and will be able to send a stop request if required. Our application is
        developed using Java & Android Studio and has a simple yet dynamic UI
        that helps the user to interact with the app easily.
      </p>
    </div>
  );
}
