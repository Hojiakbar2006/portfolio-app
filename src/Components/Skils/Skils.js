import React from "react";
import "./Skils.css";
import { CircularProgress, CircularProgressLabel } from "@chakra-ui/react";
import { useSelector } from "react-redux";

export default function Skils() {
  const data = useSelector((state) => state.skils);
  return (
    <div className="container">
      <section id="skils">
        <p className="tittle">My Skils</p>
        <div className="progresCard">
          {data.map((item, i) => {
            return (
              <div key={i} className="progress">
                <CircularProgress value={item.grade} size="230px">
                  <CircularProgressLabel>{item.grade}%</CircularProgressLabel>
                </CircularProgress>
                <h3>{item.name}</h3>
              </div>
            );
          })}
        </div>
        <div className="skilCard">
          <div>
            <h3 className="skilTittle">Language</h3>
            <div>
              <span className="lineSkil"></span>
            </div>
            <label htmlFor="progress">
              English
              <div className="progressBar">
                <span style={{ width: "70%" }} className="progress"></span>
              </div>
            </label>
            <label htmlFor="progress">
              Russian
              <div className="progressBar">
                <span style={{ width: "30%" }} className="progress"></span>
              </div>
            </label>
          </div>
          <div>
            <h3 className="skilTittle">Studies</h3>
            <div>
              <span className="lineSkil"></span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
