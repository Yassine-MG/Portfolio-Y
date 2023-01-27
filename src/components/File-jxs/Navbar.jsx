import React, { useState, useEffect } from "react";
import { WiDaySunny } from "react-icons/wi";
import { TbMoon } from "react-icons/tb";
export default function Navbar() {
  let [open, setOpen] = useState(false);
  const [theme, setTheme] = useState("light");
  // la creation de l'effet du dark/light mode
  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);
  {
    /* La creation du toggle qui switch entre le dark mode et light mode  */
  }
  const handleThemeSwitch = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };
  return (
    <div className="w-full dark:text-darkGray transition-all duration-500 ease-in z-[8] dark:bg-beige fixed top-0 flex justify-between md:justify-evenly items-center bg-darkGray text-[#dae0da]">
      <h1 className="title py-6 px-8 text-3xl font-light tracking-[5px] italic">
        Yassine
      </h1>
      {/* setting the toggle on the button */}
      <button
        className="transition-all duration-200 hover:text-orange text-2xl"
        onClick={handleThemeSwitch}
      >
        {theme === "dark" ? <WiDaySunny /> : <TbMoon />}
      </button>
      <nav>
        <ul
          className={`md:flex absolute md:static  dark:bg-beige bg-darkGray md:z-auto z-[2] left-0 w-full md:w-auto md:pl-0 pl-3 transition-all duration-500 ease-in ${
            open ? "top-[69px]" : "top-[-380px]"
          }`}
        >
          <li
            onClick={() => {
              setOpen(!open);
            }}
          >
            <a
              className="  text-[#dae0da] dark:text-darkGray dark:hover:text-orange hover:text-orange transition-all duration-200 px-5 md:py-3 md:my-2 py-4 block font-semibold"
              href="#Home"
            >
              Home
            </a>
          </li>
          <li
            onClick={() => {
              setOpen(!open);
            }}
          >
            <a
              className=" text-[#dae0da] dark:text-darkGray dark:hover:text-orange hover:text-orange transition-all duration-200 px-5  md:py-3 md:my-2 py-4 block font-semibold"
              href="#About"
            >
              About
            </a>
          </li>
          <li
            onClick={() => {
              setOpen(!open);
            }}
          >
            <a
              className=" text-[#dae0da] dark:hover:text-orange dark:text-darkGray hover:text-orange transition-all duration-200 px-5  md:py-3 md:my-2 py-4 block font-semibold"
              href="#portfolio"
            >
              Projects
            </a>
          </li>
          <li
            onClick={() => {
              setOpen(!open);
            }}
          >
            <a
              className=" md:py-3 dark:text-darkGray dark:hover:text-orange hover:text-orange transition-all duration-200 md:my-2 text-[#dae0da] mr-[20px]  px-5 py-4 block font-semibold"
              href="#Contact"
            >
              Contact
            </a>
          </li>
          <li
            className=" md:mb-0 mb-5"
            onClick={() => {
              setOpen(!open);
            }}
          >
            <a
              className="md:py-[10px] md:my-2 px-5 border-[1px] dark:hover:text-orange dark:hover:border-darkGray dark:border-transparent hover:scale-110 border-transparent w-[105px] mr-10 transition-all duration-100 rounded-full hover:border-silver py-[10px] block dark:bg-[#90909082] bg-stone-700 text-lg"
              href="https://yassine-mg.github.io/CVs/"
              target="_blank"
            >
              Resume
            </a>
          </li>
        </ul>
      </nav>

      <div
        onClick={() => {
          setOpen(!open);
        }}
        className="text-3xl cursor-pointer md:hidden mr-4"
      >
        <i className={open ? "bi bi-x" : "bi bi-list"}></i>
      </div>
    </div>
  );
}
