import React from "react";
import "./About.css"
import about from "../../Assets/Imgs/about.svg";

export default function About() {
  return (
    <div className="container">
      <section id="about">
        <div className="left">
          <img src={about} alt="" />
        </div>
        <div className="right">
          <h4>About me</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
            placeat dicta voluptates, sint quis accusantium eveniet sed
            inventore suscipit aspernatur illo praesentium quidem dolore maxime.{" "}
          </p>
          <div className="btn-group">
            <button className="btn">Hire me</button>
            <button className="btn">Resume</button>
          </div>
        </div>
      </section>
    </div>
  );
}
