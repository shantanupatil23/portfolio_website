import React from "react";
import img_wheel from "../assets/socials/img_wheel.png";
import img_cube from "../assets/socials/img_cube.png";

function Socials() {
  return (
    <section id="socials">
      <img className="img_cube socialsBg" src={img_cube} alt="img_cube" />
      <img className="img_wheel socialsBg" src={img_wheel} alt="img_wheel" />
      <p className="socialsBg text-keyboard">66.2 wpm</p>
      <i class="far fa-keyboard socialsBg fa-7x"></i>
      <p>
        Are you a Developer?
        <br />
        Do you feel alive while being on a virtual race track?
        <br />
        Can you solve the Rubik's cube in under 25 seconds or ever wanted to?
        <br />
        Ti piace esplorare la lingua italiana come me?
        <br />
        Do you like to leave graphite on paper in the form of astonishing
        sketches?
        <br />
        Are you an investor? Let's talk about stocks.
        <br />
        Let's have a talk!
      </p>
      <div className="row">
        <a href="https://www.linkedin.com/in/shantanupatil23/">
          <i className="fab fa-linkedin  fa-4x"></i>
        </a>
        <a href="https://github.com/shantanupatil23">
          <i className="fab fa-github  fa-4x"></i>
        </a>
        <a href="https://www.hackerrank.com/shantanu447">
          <i className="fab fa-hackerrank  fa-4x"></i>
        </a>
        <a href="https://www.instagram.com/shantanu.patil_/">
          <i className="fab fa-instagram  fa-4x"></i>
        </a>
      </div>
    </section>
  );
}

export default Socials;
