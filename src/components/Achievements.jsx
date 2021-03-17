import React from "react";
import img_bg_github from "../assets/achievements/img_bg_github.png";

import img_cert_mit from "../assets/achievements/img_cert_mit.jpg";
import img_cert_codebreak from "../assets/achievements/img_cert_codebreak.jpg";
import img_cert_sih from "../assets/achievements/img_cert_sih.jpg";

import img_logo_mit from "../assets/achievements/img_logo_mit.jpg";
import img_logo_xpansion from "../assets/achievements/img_logo_xpansion.jpg";
import img_logo_codebreak from "../assets/achievements/img_logo_codebreak.jpg";
import img_logo_sih from "../assets/achievements/img_logo_sih.jpg";

function Achievements() {
  return (
    <section id="achievements">
      <h1 className="achievementsText">Achievements</h1>
      <div className="githubDiv">
        <a href="https://github.com/shantanupatil23">
          <img className="githubbg" src={img_bg_github} alt="" />
          <img
            className="githubChart"
            src="http://ghchart.rshah.org/shantanupatil23"
            alt="GitHub Contributions"
          />
        </a>
      </div>

      <div className="row certificateCardRow">
        <div className="certificateCard">
          <a href={img_cert_mit}>
            <div className="row">
              <img src={img_logo_mit} alt="MIT Hackathon 2019" />
              <p>
                MIT 2019
                <br />
                Hackathon
                <br /> Participant
              </p>
            </div>
          </a>
        </div>
        <div className="certificateCard">
          <a href={img_logo_xpansion}>
            <div className="row">
              <img src={img_logo_xpansion} alt="XPERIMENTS 3.0" />
              <p>
                XPERIMENTS 3.0
                <br />
                Hackathon
                <br />
                Finalist
              </p>
            </div>
          </a>
        </div>
        <div className="certificateCard">
          <a href={img_cert_sih}>
            <div className="row">
              <img src={img_logo_sih} alt="SIH 2020 Hackathon" />
              <p>
                SIH 2020
                <br />
                Hackathon
                <br /> Finalist
              </p>
            </div>
          </a>
        </div>
        <div className="certificateCard">
          <a href={img_cert_codebreak}>
            <div className="row">
              <img src={img_logo_codebreak} alt="codebreak 2.0" />
              <p>
                Codebreak 2.0
                <br />
                Hackathon
                <br />
                Best MIT Team
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
