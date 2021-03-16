import React from "react";
import "./Project.css";
import homebg from "../assets/projects/homebg.jpg";

export default function Home() {
  return (
    <div className="project home">
      <div className="row">
        <p className="title">Smart and Secure Home</p>
        <p className="purpose">College Project</p>
      </div>
      <img src={homebg} alt="bg" />
      <p className="content">
        The basic idea of the project is to build a prototype for a Home
        Automation and Security system. Users can set up auto charging for their
        devices, motion-activated lights, fans controlled via the app, and face
        recognition for door unlock. The application is developed using Python
        (face recognition and API), C++ (Arduino driver code), and Java (Android
        application). The app communicates between the user, devices, and the
        database (Firebase).
      </p>
    </div>
  );
}
