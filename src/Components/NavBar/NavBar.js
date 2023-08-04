import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";
import { useDispatch, useSelector } from "react-redux";
import { acTheme } from "../../Redux/DarkMode";

export default function NavBar() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();

  if (!theme) {
    document.body.classList.add("dark");
  } else {
    document.body.classList.remove("dark");
  }

  // console.log(dark);

  const location = useLocation().pathname;

  return (
    <nav className={!theme ? "bg-dark" : "bg-light"}>
      <img src="./logo.svg" alt="" />

      {location === "/project" ? (
        <Link className="backHome" to="/">
          Back Home
        </Link>
      ) : (
        <div className="link-items">
          <a onClick={() => window.scrollTo(0, 0)} href="#home">
            Home
          </a>
          <a href="#about">About me</a>
          <a href="#portfolio">Portfolio</a>
          <a href="#skils">Professions</a>
          <a href="#contact">Contact</a>

          <label className="switch">
            <input
              type="checkbox"
              onChange={() => dispatch(acTheme(!theme))}
              checked={theme}
            />
            <span className="slider"></span>
          </label>
        </div>
      )}
      {location === "/project" ? (
        ""
      ) : (
        <label className="burger">
          <input className="check-icon" id="check-icon" type="checkbox" />
          <label className="icon-menu" for="check-icon">
            <div className="bar bar--1"></div>
            <div className="bar bar--2"></div>
            <div className="bar bar--3"></div>
          </label>
        </label>
      )}
    </nav>
  );
}
