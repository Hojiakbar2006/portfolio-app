import React from "react";
import "./Header.css";
import banner from "../../Assets/Imgs/Banner.svg";
import { Typewriter } from "react-simple-typewriter";

export default function Header() {
  return (
    <div className="container">
      <section id="header">
        <div className="left">
          <h5>
            <p>Hello, my name is</p> <p>Hojiakbar Nasriddinov</p>
          </h5>

          <span className="tittle">
            <Typewriter
              words={[
                "I'm Web Developer",
                "contact me:",
                "tel: +998(99) 325 06-28",
                "mail: hojiakbarnasriddinov2006@gmail.com",
                "github: Hojiakbar2006",
              ]}
              loop={true}
              cursor
              cursorStyle="_"
              onDelay={() => 1111}
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={3000}
            />
          </span>
          <button className="btn">Previous</button>

        </div>
        <img className="banner" src={banner} alt="" />
      </section>
    </div>
  );
}
// FULL STACK SOFTWARE DEVELOPER.
