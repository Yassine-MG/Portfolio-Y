import React from "react";
import "../style/Skill.css";
import SkillsBar from "./SkillsBar";
export default function Skills() {
  return (
    <div
      id="Skills"
      className="bg-silver dark:bg-darkGray mt-[100px] py-[100px]"
    >
      <h1 className="title-text text-center dark:text-silver text-[#1b1b1b] text-3xl font-semibold ">
        Skill Progress
      </h1>
      <div className="content md:flex justify-center ">
        <div className="md:w-[60%] w-[90%] md:mx-0 mx-auto">
          <SkillsBar
            title="Html & Css"
            width="w-[90%] "
            percent="90%"
          ></SkillsBar>
          <SkillsBar
            title="Javascript"
            width="w-[75%] "
            percent="75%"
          ></SkillsBar>
          <SkillsBar title="React" width="w-[80%] " percent="80%"></SkillsBar>
        </div>
        <div className="md:w-[60%] w-[90%] md:mx-0 mx-auto">
          <SkillsBar title="PHP" width="w-[60%] " percent="60%"></SkillsBar>
          <SkillsBar title="Laravel" width="w-[50%] " percent="50%"></SkillsBar>
          <SkillsBar
            title="Tailwind"
            width="w-[90%] "
            percent="90%"
          ></SkillsBar>
        </div>
      </div>
    </div>
  );
}
