import React from "react";
export default function Home() {
  return (
    <div
      id="Home"
      data-aos="fade-down"
      data-aos-duration="1500"
      className="my-20 lg:pt-[110px] pt-0"
    >
      <div className="container-home pt-[80px] mb-10 md:static flex-wrap-reverse justify-around flex w-[85%] md:w-[75%] mx-auto relative  md:z-auto">
        <div>
          <p className=" text-silver dark:text-darkGray font-bold mt-[50px]">
            Hi, My name is
          </p>
          <h1 className="Yassine font-bold  md:text-[50px] text-[30px]">
            Yassine Mghazli
          </h1>
          <h2 className="Yassine font-bold md:w-[530px] md:text-[40px] text-[30px]">
            I'm a Full-Stack developer
          </h2>
          <p className=" mt-5 md:w-[530px] dark:text-darkGray text-silver text-lg text-justify tracking-[2px] font-semibold ">
            I specialize in Website & Mobile App developement, Based in
            Marrakech and open to Job mobility Scroll down to know more about me
            !
          </p>
        </div>
        <div className="Profil-img"></div>
      </div>
      <div className="flex justify-center">
        <a
          className="animate-bounce bg-[#44403c] border-[1px] mb-[120px] mt-10 hover:scale-110 dark:text-darkGray dark:bg-[#90909082] text-silver border-transparent transition-all duration-200 hover:border-[#abbaab] p-4 rounded-full"
          href="#About"
        >
          <i className="bi bi-chevron-down"></i>
        </a>
      </div>
      {/* Les icones des reseaux sociaux */}
      <div className="icones z-10 flex flex-col md:fixed top-[40%] left-[3%]">
        <a
          className=" hover:text-[#0077b0] transition-all duration-300 ease-in-out dark:text-darkPink dark:hover:text-[#0077b0] text-orange my-3 text-[25px]"
          href="https://www.linkedin.com/in/yassine-mghazli-2ab274251/"
          target="_blank"
        >
          <i className="bi bi-linkedin"></i>{" "}
        </a>
        <a
          className=" hover:text-[#7b2586] transition-all duration-300 ease-in-out dark:text-darkPink dark:hover:text-[#7b2586] text-orange my-3 text-[25px]"
          href="https://github.com/Yassine-MG"
          target="_blank"
        >
          <i className="bi bi-github"></i>
        </a>
        <a
          className="hover:text-[#cd216e] transition-all duration-300 ease-in-out dark:text-darkPink dark:hover:text-[#cd216e] text-orange my-3 text-[25px]"
          href="https://www.instagram.com/yassine_mghazli/"
          target="_blank"
        >
          <i className="bi bi-instagram"></i>
        </a>
        <a
          className="hover:text-[#2ba5da] transition-all duration-300 ease-in-out dark:text-darkPink dark:hover:text-[#2ba5da] text-orange my-3 text-[25px]"
          href="https://twitter.com/YassineMghazli"
          target="_blank"
        >
          <i className="bi bi-twitter"></i>
        </a>
      </div>
    </div>
  );
}
