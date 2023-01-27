import React from "react";
export default function About() {
  return (
    <div id="About" className="md:mt-30">
      <h2 className="text-center mt-[100px] dark:text-darkPink text-orange text-4xl p-2 mb-[150px]">
        About Me
      </h2>
      <div className="lg:flex justify-evenly flex-wrap ">
        <p
          data-aos="fade-up"
          data-aos-duration="1500"
          className=" dark:text-darkGray w-[85%] text-justify font-medium mx-auto md:w-[70%] lg:m-0 md:mb-16 lg:w-[40%] text-lg text-silver"
        >
          My name is{" "}
          <span className=" font-bold dark:text-darkPink text-orange">
            Yassine Mghazli and I am a Full-Stack Web Developer
          </span>{" "}
          based in Marrakesh, Morocco. I specialize in creating and maintaining
          web applications using various technologies such as React, JavaScript,
          PHP, etc. (Check below for the complete list). I am a highly curious
          and rigorous individual who is dedicated to staying up-to-date with
          the latest industry trends and best practices. I have a strong
          attention to detail and pride myself on delivering high-quality work
          on time and on budget. I am excited to be a part of your team and I am
          confident that my skills and experience will make a valuable
          contribution to your projects. Thank you for reading this short
          presentation.
        </p>

        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className=" dark:text-darkGray text-silver md:my-0 my-[60px] text-center"
        >
          <div>
            <i className="hover:text-[#dd4b25] transition-all duration-500 ease-in-out text-7xl px-4 bx bxl-html5"></i>
            <i className="hover:text-[#254bdd] transition-all duration-500 ease-in-out text-7xl px-4 bx bxl-css3"></i>
            <i className="hover:text-[#f7df1e] transition-all duration-500 ease-in-out text-7xl px-4 bx bxl-javascript"></i>
          </div>
          <div>
            <i className="hover:text-[#5ed3f3] transition-all duration-500 ease-in-out text-7xl px-4 bx bxl-react"></i>
            <i className="hover:text-[#4d588e] transition-all duration-500 ease-in-out text-7xl px-4 bx bxl-php"></i>
            <i className="hover:text-[#e83f33] transition-all duration-500 ease-in-out text-7xl px-4 fa-brands fa-laravel"></i>
          </div>
        </div>
      </div>
    </div>
  );
}
