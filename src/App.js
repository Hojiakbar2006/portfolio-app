import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import Project from "./Pages/Project/Project";
import NavBar from "./Components/NavBar/NavBar";
import Config from "./Config/Config";
import { Clock } from "./Components/Clock/Clock";

function App() {
  return (
    <>
    <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/project" element={<Project/>} />
      </Routes>
      <Config/>
      <Clock/>
    </>
  );
}

export default App;
