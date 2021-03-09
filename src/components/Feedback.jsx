import React from "react";
import Slider from "../components/Slider";

function Feedback() {
  return (
    <section id="feedback">
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

      <a href="/feedback">
        <div className="feedbackButton">Leave Your Feedback Here</div>
      </a>
    </section>
  );
}

export default Feedback;
