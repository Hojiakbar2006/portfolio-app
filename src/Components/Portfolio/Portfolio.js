import React from "react";
import "./Portfolio.css";
import img from "../../Assets/Imgs/ProjectImg.png";
import { Link, useNavigate } from "react-router-dom";

import GitIcon from "../../Assets/Imgs/GitHubGr.svg";
import NetIcon from "../../Assets/Imgs/NetlifyGr.svg";
import Like from "../../Assets/Imgs/Like.svg";
import DisLike from "../../Assets/Imgs/Dislike.svg";

export default function Portfolio() {
  const navigate = useNavigate()
  return (
    <div className="container" name="Portfolio">
      <section id="portfolio">
        <h1 className="tittle">Portfolio</h1>
        <div className="projectDiv">
          <div className="left">
            <h2>Project 1</h2>
            <h1>Project Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              placeat, sint quis accusantium eveniet sed inventore suscipit
              aspernatur illo praesentium quidem dolore maxime.{" "}
            </p>
          </div>
          <div className="right">
            <figure>
              <div className="modal">
                <div>
                  <Link href="#">
                    <img src={GitIcon} alt="" />
                  </Link>
                  <Link href="#">
                    <img src={NetIcon} alt="" />
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <img src={Like} alt="" />
                  </Link>
                  <p>100</p>
                  <Link href="#">
                    <img src={DisLike} alt="" />
                  </Link>
                </div>
              </div>
              <img src={img} alt="" />
            </figure>
          </div>
        </div>
        <div className="projectDiv">
          <div className="left">
            <h2>Project 1</h2>
            <h1>Project Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              placeat, sint quis accusantium eveniet sed inventore suscipit
              aspernatur illo praesentium quidem dolore maxime.{" "}
            </p>
          </div>
          <div className="right">
            <figure>
              <div className="modal">
                <div>
                  <Link href="#">
                    <img src={GitIcon} alt="" />
                  </Link>
                  <Link href="#">
                    <img src={NetIcon} alt="" />
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <img src={Like} alt="" />
                  </Link>
                  <p>100</p>
                  <Link href="#">
                    <img src={DisLike} alt="" />
                  </Link>
                </div>
              </div>
              <img src={img} alt="" />
            </figure>
          </div>
        </div>
        <div className="projectDiv">
          <div className="left">
            <h2>Project 1</h2>
            <h1>Project Name</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
              placeat, sint quis accusantium eveniet sed inventore suscipit
              aspernatur illo praesentium quidem dolore maxime.{" "}
            </p>
          </div>
          <div className="right">
            <figure>
              <div className="modal">
                <div>
                  <Link href="#">
                    <img src={GitIcon} alt="" />
                  </Link>
                  <Link href="#">
                    <img src={NetIcon} alt="" />
                  </Link>
                </div>
                <div>
                  <Link href="#">
                    <img src={Like} alt="" />
                  </Link>
                  <p>100</p>
                  <Link href="#">
                    <img src={DisLike} alt="" />
                  </Link>
                </div>
              </div>
              <img src={img} alt="" />
            </figure>
          </div>
        </div>
        <button className="btn" onClick={()=>navigate("/project")}>View All</button>
      </section>
    </div>
  );
}
