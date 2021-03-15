import React from "react";

import img_dice from "../assets/projects/img_dice.png";
import img_drumkit from "../assets/projects/img_drumkit.png";
import img_simongame from "../assets/projects/img_simongame.png";
import img_tictactoe from "../assets/projects/img_tictactoe.png";

import foodifylg from "../assets/projects/foodifylg.png";
import bmtlg from "../assets/projects/bmtlg.png";
import homelg from "../assets/projects/homelg.png";
import potholeslg from "../assets/projects/potholeslg.png";
import busifylg from "../assets/projects/busifylg.png";
import keeperlg from "../assets/projects/keeperlg.png";
import bloglg from "../assets/projects/bloglg.png";
import todolg from "../assets/projects/todolg.png";

import Slider from "../components/Slider";

function Projects() {
  return (
    <section id="projects">
      <p className="projectsTitleSmall">few of *</p>
      <h1 className="projectsTitle">My Works</h1>
      <div className="row gameCardRow">
        <div className="gameCard">
          <a href="https://shantanupatil23.github.io/Dicee/">
            <img src={img_dice} alt="Dicee" />
            <p>Dicee</p>
          </a>
        </div>
        <div className="gameCard">
          <a href="https://shantanupatil23.github.io/DrumKit/">
            <img src={img_drumkit} alt="Drum Kit" />
            <p>Drum Kit</p>
          </a>
        </div>
        <div className="gameCard">
          <a href="https://shantanupatil23.github.io/SimonGame/">
            <img src={img_simongame} alt="Simon Game" />
            <p>Simon Game</p>
          </a>
        </div>
        <div className="gameCard">
          <a href="https://shantanupatil23.github.io/TickTacToe/">
            <img src={img_tictactoe} alt="Tic Tac Toe" />
            <p>Tic Tac Toe</p>
          </a>
        </div>
      </div>
      <div className="projectCardRow">
        <div style={{ display: "flex", justifyContent: "space-between" }} />
        <Slider
          options={{
            autoPlay: 3000,
            pauseAutoPlayOnHover: true,
            wrapAround: true,
            fullscreen: true,
            adaptiveHeight: true,
          }}
        >
          <div className="projectCard wnames">
            <a href="https://shantanupatil23.github.io/img_foodifylg/">
              <img src={foodifylg} alt="foodifylg" />
            </a>
          </div>
          <div className="projectCard wnames">
            <a href="https://shantanupatil23.github.io/TickTacToe/">
              <img src={bmtlg} alt="bmtlg" />
            </a>
          </div>
          <div className="projectCard wnames">
            <a href="https://shantanupatil23.github.io/TickTacToe/">
              <img src={busifylg} alt="busifylg" />
            </a>
          </div>
          <div className="projectCard wnames">
            <a href="https://shantanupatil23.github.io/Dicee/">
              <img src={keeperlg} alt="keeperlg" />
            </a>
          </div>
          <div className="projectCard wonames">
            <a href="https://shantanupatil23.github.io/DrumKit/">
              <img src={homelg} alt="homelg" />
              <p>Smart And Secure Homes</p>
            </a>
          </div>
          <div className="projectCard wonames">
            <a href="https://shantanupatil23.github.io/SimonGame/">
              <img src={potholeslg} alt="potholeslg" />
              <p>Potholes+</p>
            </a>
          </div>
          <div className="projectCard wnames">
            <a href="https://shantanupatil23.github.io/Dicee/">
              <img src={bloglg} alt="bloglg" />
            </a>
          </div>
          <div className="projectCard wnames">
            <a href="https://shantanupatil23.github.io/Dicee/">
              <img src={todolg} alt="todolg" />
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
