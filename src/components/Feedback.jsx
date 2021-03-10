import React from "react";
import Slider from "../components/Slider";

function Feedback() {
  return (
    <section id="feedback">
      <h1 className="feedbackTitle">Feedbacks ❤</h1>
      <div className="feedbackCardRow">
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
          <div className="feedbackCard">
            <p className="feedbackBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis sem ut sollicitudin dignissim. Aenean fermentum dignissim
              orci, quis facilisis nisi facilisis a. Nulla ut leo et lorem
              faucibus pellentesque.
            </p>
            <p className="feedbackAuthor">Lorem Ipsum</p>
          </div>
          <div className="feedbackCard">
            <p className="feedbackBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis sem ut sollicitudin dignissim. Aenean fermentum dignissim
              orci, quis facilisis nisi facilisis a. Nulla ut leo et lorem
              faucibus pellentesque.
            </p>
            <p className="feedbackAuthor">Lorem Ipsum</p>
          </div>
          <div className="feedbackCard">
            <p className="feedbackBody">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              mollis sem ut sollicitudin dignissim. Aenean fermentum dignissim
              orci, quis facilisis nisi facilisis a. Nulla ut leo et lorem
              faucibus pellentesque.
            </p>
            <p className="feedbackAuthor">Lorem Ipsum</p>
          </div>
        </Slider>
      </div>

      

      <p className="endNote">
        <i class="fas fa-signature"></i>
        <br />
        Have something to say?
        <br />
        <a href="/">Leave Your Feedback Here.</a>
      </p>
      <p className="endNote">
        <i class="fas fa-terminal"></i>
        <br />
        Do you have any Project in mind?
        <br />
        <a href="/">Hire Me!</a>
      </p>

      <p className="footerNote">
        This website is built from stratch using React JS.
        <br />© Copyright 2021 Shantanu Patil
      </p>
    </section>
  );
}

export default Feedback;
