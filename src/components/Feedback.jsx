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
              At the helm of today's progress is a technology that's paved the
              way for monumental improvements in our lives -- the internet has
              shaped our communications
            </p>
            <p className="feedbackAuthor">Manny Koshbin</p>
          </div>
          <div className="feedbackCard">
            <p className="feedbackBody">
              At the helm of today's progress is a technology that's paved the
              way for monumental improvements in our lives -- the internet has
              shaped our communications
            </p>
            <p className="feedbackAuthor">Manny Koshbin</p>
          </div>
          <div className="feedbackCard">
            <p className="feedbackBody">
              At the helm of today's progress is a technology that's paved the
              way for monumental improvements in our lives -- the internet has
              shaped our communications
            </p>
            <p className="feedbackAuthor">Manny Koshbin</p>
          </div>
        </Slider>
      </div>
      <p className="endNote">
        Have something to say?
        <br />
        <a href="/">Leave Your Feedback Here.</a>
      </p>
      <p className="endNote">
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
