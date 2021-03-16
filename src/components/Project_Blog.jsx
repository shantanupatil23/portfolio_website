import React from "react";
import "./Project.css";
import blogbg from "../assets/projects/blogbg.png";

export default function blog() {
  return (
    <div className="project blog">
      <div className="row">
        <p className="title">Daily Journal</p>
        <p className="purpose">Practice Project</p>
      </div>
      <img src={blogbg} alt="bg" />
      <p className="content">
        A dialy jounal app to practice my knowledge on Full Stack Web Development.
      </p>
    </div>
  );
}
