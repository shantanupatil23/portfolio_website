import React from "react";
import "./Project.css";
import todobg from "../assets/projects/todobg.png";

export default function ToDo() {
  return (
    <div className="project todo">
      <div className="row">
        <p className="title">To-Do_List</p>
        <p className="purpose">Practice Project</p>
      </div>
      <img src={todobg} alt="bg" />
      <p className="content">
        A To Do List app to practice my knowledge on Full Stack Web Development.
      </p>
    </div>
  );
}
