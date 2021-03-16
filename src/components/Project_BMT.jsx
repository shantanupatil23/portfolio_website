import React from "react";
import "./Project.css";
import bmtbg from "../assets/projects/bmtbg.png";

export default function BMT() {
  return (
    <div className="project bmt">
      <div className="row">
        <p className="title">Book My Tool</p>
        <p className="purpose">Internship Project</p>
      </div>
      <img src={bmtbg} alt="bg" />
      <p className="content">
        Book My Tool is a startup, founded with an intention to support all SME,
        MSME & large scale industries to come on one portal to share / leverage
        their strengths by using e-platform & get the best efficiency.
        <br />
        <br />
        We cater to the most unorganized industry & hope our website will help
        to connect & improve efficiency of this industry.
        <br />
        <br />
        Being in the industry for quite some time, we have come across the daily
        problems faced by everyone. Through Book My Tool we make things better
        and easy & hope this platform will serve a good solution to all our
        users.
        <br />
        <br />
        Book My Tool is a social platform to connect all entities related to the
        Tooling Industry in India.
        <br />
        <br />
        Our platform will help industries save time and find appropriate
        resources & also be of service to all growing industries to scale up
        their skills & competencies with a focus on the Freelancers & Expats as
        well.
      </p>
    </div>
  );
}
