import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import ResumeProjects from "./ResumeProjects";
import Skills from "./Skills";
import Contact from "./Contact";
export default function Portefolio() {
  return (
    <div className=" bg-darkGray dark:bg-beige transition-all duration-500 ease-in">
      <Navbar />
      <Home />
      <About />
      <ResumeProjects />
      <Skills />
      <Contact />
    </div>
  );
}
