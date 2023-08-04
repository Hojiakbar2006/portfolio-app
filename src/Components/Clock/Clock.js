import { useState } from "react";
import "./Clock.css";

export function Clock() {
  const [clock, setClock] = useState();

  const Clock = () => {
    let day = new Date();
    let hh = day.getHours() < 10 ? `0${day.getSeconds()}` : day.getHours();
    let mm = day.getMinutes() < 10 ? `0${day.getSeconds()}` : day.getMinutes();
    let ss = day.getSeconds() < 10 ? `0${day.getSeconds()}` : day.getSeconds();
    setClock(`${hh}:${mm}:${ss}`);
  };
  setInterval(() => {
    Clock();
  }, 1000);

  return <h3 id="clock">{clock}</h3>;
}
