import React from "react";
import "./Project.css";
import potholesbg from "../assets/projects/potholesbg.png";

export default function potholes() {
  return (
    <div className="project potholes">
      <div className="row">
        <p className="title">Potholes+</p>
        <p className="purpose">Hackathon Project</p>
      </div>
      <img src={potholesbg} alt="bg" />
      <p className="content">
        The primary goal of our project is to make pothole-less roads and to
        make better governance by more involvement of the public. It also aims
        at providing low-cost reliable automation of the existing systems. The
        system will also provide excellent security of data at every level of
        user-system interaction and also provide robust and reliable storage and
        backup facilities.
      </p>
    </div>
  );
}
