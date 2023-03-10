import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import ResumeProjects from "./ResumeProjects";
import Contact from "./Contact";
import Cards from "./Cards";
export default function Portefolio() {
  // Tout le portefolio
  return (
    <div className=" bg-darkGray dark:bg-beige transition-all duration-500 ease-in">
      <Navbar />
      <Home />
      <About />
      <Cards />
      <ResumeProjects />
      <Contact />
    </div>
  );
}
