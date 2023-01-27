import React, { useEffect, useState } from "react";
import { GalleryData } from "../../GalleryData";
import { AnimatePresence, motion } from "framer-motion";

export default function ResumeProjects() {
  const [data, setData] = useState([]);
  const [collection, setCollection] = useState([]);

  // Gallerydata c'est le tableau qui englobe les informations de chaque box
  // Setting the gallerydata on the Data
  useEffect(() => {
    setData(GalleryData);
    setCollection([...new Set(GalleryData.map((item) => item.title))]);
  }, []);
  // listing the images by filter
  const gallery_filter = (itemData) => {
    const filterData = GalleryData.filter((item) => item.title == itemData);
    setData(filterData);
  };

  return (
    <section id="portfolio" className="relative section min-h-[900px]">
      <svg
        className="lg:block hidden "
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#343333"
          fill-opacity="1"
          d="M0,160L1440,32L1440,0L0,0Z"
        ></path>
      </svg>
      <div className="container mx-auto">
        <div
          data-aos="fade-up"
          data-aos-duration="1500"
          className="flex flex-col items-center text-justify md:text-center"
        >
          {" "}
          <h2 className="mt-[100px] lg:mt-[0px] dark:text-darkPink text-orange text-4xl ">
            Projects
          </h2>
          <p className="subtitle md:w-[80%] lg:w-[60%] dark:text-darkGray text-silver text-lg font-bold p-5 my-6">
            {" "}
            Throughout my web development journey, I have had the opportunity to
            work on a variety of projects that have allowed me to hone my skills
            and gain experience in different areas of web development. I am
            excited to share with you some of the projects I have worked on and
            how they have helped me to become a better developer.
          </p>
        </div>
        <div>
          <div>
            {/* Les button pour filtrer le type de Projects */}
            <ul className="flex justify-center my-10 flex-wrap dark:text-darkGray text-orange text-md md:text-lg">
              <li className="md:m-5 my-1 mx-2">
                <button
                  onClick={() => setData(GalleryData)}
                  className="w-[120px] md:w-[140px] rounded-full transition-all duration-200 hover:bg-[#9b999991] border border-transparent  px-[10px] py-[5px] md:px-[20px] md:py-[10px] bg-[#9b999931]"
                >
                  All
                </button>
              </li>

              {collection.map((item) => (
                <li key={item.id} className="md:m-5 my-1 mx-2">
                  <button
                    onClick={() => {
                      gallery_filter(item);
                    }}
                    className="md:w-[140px] w-[120px] rounded-full transition-all duration-200 hover:bg-[#9b999991] border border-transparent px-[10px] py-[5px] md:px-[20px] md:py-[10px] bg-[#9b999931]"
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div className="mx-10 galleryContainer grid grid-cols-1 md:grid-cols-2 md:col-span-4 lg:grid-cols-3 gap-[10px] md:gap-[40px] lg:gap-[60px]">
            {/* la liste des images */}
            {/* AnimatePresence is the animation on the list*/}
            <AnimatePresence>
              {data.map((item) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className=" container-image mt-10 md:mt-0 relative parrain overflow-hidden"
                  key={item.id}
                >
                  <a target="_blank" href={item.link}>
                    <img
                      className="images h-full rounded-t-lg "
                      src={item.image}
                      alt="images"
                    />
                    <div className=" description md:block text-lg md:rounded-t-lg  text-silver font-bold  md:p-2 p-1 bg-[#1d1c1c9b] absolute  md:top-[0px] md:h-full w-[100%]">
                      <h3 className="title-2 md:text-center">{item.h3}</h3>
                      <p className="title-2 text-sm">{item.description}</p>
                    </div>
                  </a>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex justify-center my-8">
          <a
            className=" ransition-all duration-200 hover:bg-[#9b999991] bg-[#9b999931] dark:text-darkPink text-orange font-bold py-2 px-4 rounded-full"
            target="_blank"
            href="https://github.com/Yassine-MG?tab=repositories"
          >
            More Projects
          </a>
        </div>
      </div>
    </section>
  );
}
