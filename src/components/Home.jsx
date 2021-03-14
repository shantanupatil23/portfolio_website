import React, { Component } from "react";
import img_browser from "../assets/home/img_browser.png";
import img_phone from "../assets/home/img_phone.png";
import img_aurora from "../assets/home/img_aurora.jpg";
import TextScramble from "react-textscramble";

export default class Home extends Component {
  constructor() {
    super();

    this.state = {
      scrambleProgess: 0,
    };
  }
  render() {
    return (
      <section id="home">
        <img className="backgroundImage" src={img_aurora} alt="backgroundImage"/>
        <h1 className="intro_text">
          Hello,
          <br />
          I'm Shantanu
          <br />
          <div>
            a
            <TextScramble
              phrases={["", "n", "", "n"]}
              freezeDuration={2200}
              reportProgress={(progress) => {
                this.setState({ scrambleProgess: progress });
              }}
            />
            &nbsp;
            <TextScramble
              phrases={["", "Android", "Web", "App"]}
              freezeDuration={1500}
              reportProgress={(progress) => {
                this.setState({ scrambleProgess: progress });
              }}
            />
            &nbsp;developer.
          </div>
        </h1>

        <img className="img_browser" src={img_browser} alt="browser" />
        <img className="img_phone" src={img_phone} alt="phone" />
      </section>
    );
  }
}
