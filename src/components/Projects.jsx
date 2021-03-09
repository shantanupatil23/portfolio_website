import React from "react";
import img_dice from "../assets/projects/img_dice.png";
import img_drumkit from "../assets/projects/img_drumkit.png";
import img_simongame from "../assets/projects/img_simongame.png";
import img_tictactoe from "../assets/projects/img_tictactoe.png";
import Slider from "../components/Slider";

function Projects() {
  return (
    <section id="projects">
      <h1 className="projectsTitle">
        My
        <br />
        Projects
      </h1>
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
          <div className="projectCard">
            <a href="https://shantanupatil23.github.io/Dicee/">
              <img src={img_dice} alt="Dicee" />
              <p>Dicee</p>
            </a>
          </div>
          <div className="projectCard">
            <a href="https://shantanupatil23.github.io/DrumKit/">
              <img src={img_drumkit} alt="Drum Kit" />
              <p>Drum Kit</p>
            </a>
          </div>
          <div className="projectCard">
            <a href="https://shantanupatil23.github.io/SimonGame/">
              <img src={img_simongame} alt="Simon Game" />
              <p>Simon Game</p>
            </a>
          </div>
          <div className="projectCard">
            <a href="https://shantanupatil23.github.io/TickTacToe/">
              <img src={img_tictactoe} alt="Tic Tac Toe" />
              <p>Tic Tac Toe</p>
            </a>
          </div>

          <div className="projectCard">
            <a href="https://shantanupatil23.github.io/Dicee/">
              <img src={img_dice} alt="Dicee" />
              <p>Dicee</p>
            </a>
          </div>
          <div className="projectCard">
            <a href="https://shantanupatil23.github.io/DrumKit/">
              <img src={img_drumkit} alt="Drum Kit" />
              <p>Drum Kit</p>
            </a>
          </div>
          <div className="projectCard">
            <a href="https://shantanupatil23.github.io/SimonGame/">
              <img src={img_simongame} alt="Simon Game" />
              <p>Simon Game</p>
            </a>
          </div>
          <div className="projectCard">
            <a href="https://shantanupatil23.github.io/TickTacToe/">
              <img src={img_tictactoe} alt="Tic Tac Toe" />
              <p>Tic Tac Toe</p>
            </a>
          </div>
        </Slider>
      </div>
    </section>
  );
}

export default Projects;
