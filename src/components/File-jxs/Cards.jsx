import React from "react";
import Card from "./Card";
export default function Cards() {
  return (
    <div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#343333"
          fill-opacity="1"
          d="M0,288L1440,192L1440,320L0,320Z"
        ></path>
      </svg>
      <div className="text-center bg-[#343333]">
        <h2 className="text-orange mb-20 text-3xl font-semibold">
          Things I love
        </h2>
        <div className="flex flex-wrap justify-evenly dark:text-darkGray text-white ">
          <div className="">
            {" "}
            <Card
              Card="text-center rounded-lg mx-auto p-10 w-[90%] min-h-[300px] md:w-[400px] my-3 lg:w-[500px] bg-darkGray"
              h3Content="Coding"
              classIcon="bx bx-code-alt text-3xl text-white rounded-full bg-orange p-6 "
              classH3="text-2xl my-3 dark:text-darkGray dark:text-orange text-orange"
              Pcontent="I like to marry FrontEnd and BackEnd concepts to develop all sorts of creative projects"
              description="leading-8 font-bold text-silver"
            ></Card>
          </div>
          <div className="">
            <Card
              Card="text-center rounded-lg mx-auto p-10 min-h-[300px] w-[90%] md:w-[400px] my-3 lg:w-[500px] bg-darkGray"
              h3Content="Javascript"
              classIcon="bx bxl-javascript text-3xl text-white rounded-full bg-orange p-6 "
              classH3="text-2xl my-3 dark:text-darkGray dark:text-orange text-orange"
              Pcontent="I like to work with Javascript to make UI/UX friendly applications, websites and games "
              description="leading-8 font-bold text-silver"
            ></Card>
          </div>
          <div className="">
            {" "}
            <Card
              Card="text-center rounded-lg mx-auto p-10 w-[90%] min-h-[300px] sm:w-[92%] md:w-[400px] my-3 lg:w-[500px] bg-darkGray"
              h3Content="Designer"
              classIcon="fa-solid fa-wand-magic-sparkles text-white text-3xl rounded-full bg-orange p-6 "
              classH3="text-2xl my-3 dark:text-darkGray dark:text-orange text-orange"
              Pcontent="I favor modern, minimalistic but dynamic designs that would get the user hooked "
              description="leading-8 font-bold  text-silver"
            ></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
