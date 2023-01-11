import React from "react";
import HeroImage from "../assets/heroImage.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";



const Home = () => {
  
  return (
    <div
      name="home"
      className="h-screen w-full pt-16 bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="max-w-screen-lg mx-auto my-16 md:my-auto flex flex-col items-center justify-center h-full px-12 md:flex-row">
        <div className="flex flex-col justify-center h-full w-full">
          <h2 className="text-4xl md:text-6xl font-bold text-white">
            I'm a Frontend Developer
          </h2>
          <p className="text-gray-500 py-4 max-w-lg">

          As a front-end developer, I create intuitive, visually stunning user experiences for the web using HTML, CSS, and JavaScript. I am proficient in the latest technologies and ready to take on any challenge. View my portfolio and contact me for web development projects.
          
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white font-semibold  w-fit px-4 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer "
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
             
            </Link>
          </div>
        </div>

        <div className="flex flex-col justify-center h-full w-full">
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto my-10 w-1/2  md:w-3/4 lg:w-4/6"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
