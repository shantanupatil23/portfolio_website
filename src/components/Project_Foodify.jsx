import React from "react";
import "./Project.css";
import foodifybg from "../assets/projects/foodifybg.png";

export default function Foodify() {
  return (
    <div className="project foodify">
        <div className="row">
          <p className="title">Foodify</p>
          <p className="purpose">Hackathon Project</p>
        </div>
      <img src={foodifybg} alt="bg" />
        <p className="content">
          Foodify is an app that not only creates a portal that bridges the gap
          between people who want to sell leftover food and people who want to
          buy it, but it also gives recipes that can be created out of leftover
          food. <br /><br />
          Foodify is made keeping the user in mind. It has an innovative,
          dynamic, and easy to navigate user interface created via flutter that
          automatically recognizes dishes based on a simple image. Via this
          image, it scrapes the internet for recipes or can put the dish up for
          sale for people who are willing to buy it. It uses convolutional
          neural networks to recognize the dishes/ingredients and via RESTapi,
          which runs on a self-made server, it either scrapes the web for
          recipes or posts or puts the dish up on the portal for it to be
          shared.
        </p>
    </div>
  );
}
