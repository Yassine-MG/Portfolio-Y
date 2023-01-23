import React from "react";

export default function SkillsBar(prop) {
  // La creation du components des bars
  return (
    <div className="skill-box md:w-[70%] w-[90%]">
      <span
        className={`Title dark:text-silver ${prop.style} text-lg font-semibold`}
      >
        {prop.title}
      </span>
      <div className="skill-bar ">
        <span className={`skill-per dark:bg-silver ${prop.width}`}>
          <span
            className={`tooltip dark:bg-silver dark:text-darkGray ${prop.stylePercent}`}
          >
            {prop.percent}
          </span>
        </span>
      </div>
    </div>
  );
}
