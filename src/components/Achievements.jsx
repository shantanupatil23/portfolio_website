import React from "react";
import img_github from "../assets/achievements/img_github.png";
import img_browser_github from "../assets/achievements/img_browser_github.png";
import img_MITHackathon2019 from "../assets/achievements/img_MITHackathon2019.jpg";
import img_codebreak from "../assets/achievements/img_codebreak.jpg";
import img_SIH2020 from "../assets/achievements/img_SIH2020.jpg";
import img_mit from "../assets/achievements/img_mit.jpeg";
import img_xpansion from "../assets/achievements/img_xpansion.jpeg";
import img_codebreakic from "../assets/achievements/img_codebreak.png";
import img_sih from "../assets/achievements/img_sih.png";

function Achievements() {
  return (
    <section id="achievements">
      <h1 className="achievementsText">Achievements</h1>
      <div className="githubDiv">
        <a href="https://github.com/shantanupatil23">
          <img className="githubbg" src={img_browser_github} alt="" />
          <img
            className="githubChart"
            src="http://ghchart.rshah.org/shantanupatil23"
            alt="GitHub Contributions"
          />
          <img className="github" src={img_github} alt="" />
        </a>
      </div>

      <div className="row certificateCardRow">
        <div className="certificateCard">
          <a href={img_MITHackathon2019}>
            <div className="row">
              <img src={img_mit} alt="MIT Hackathon 2019" />
              <p>
                MIT Hackathon 2019
                <br /> Participant
              </p>
            </div>
          </a>
        </div>
        <div className="certificateCard">
          <a href={img_xpansion}>
            <div className="row">
              <img src={img_xpansion} alt="XPERIMENTS 3.0" />
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
          <a href={img_codebreak}>
            <div className="row">
              <img src={img_codebreakic} alt="codebreak 2.0" />
              <p>
                codebreak 2.0 <br /> Hackathon <br /> Finalist
              </p>
            </div>
          </a>
        </div>
        <div className="certificateCard">
          <a href={img_SIH2020}>
            <div className="row">
              <img src={img_sih} alt="SIH 2020 Hackathon" />
              <p>
                SIH 2020 Hackathon <br /> Finalist
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Achievements;
