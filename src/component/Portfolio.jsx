import React from "react";
import rentIt from "../assets/portfolio/rentit.png";
import navbar from "../assets/portfolio/navbar.jpg";
import report from "../assets/portfolio/report.png";
import reactSmooth from "../assets/portfolio/reactSmooth.jpg";
import webdev from "../assets/portfolio/webdev.jpg";
import webdes from "../assets/portfolio/webdesign.jpg";


const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: rentIt,
      demo: "https://anuproybca.github.io/RentIt/Index.html",
      code: "https://github.com/anuproybca/RentIt",
    },
    {
      id: 2,
      src: report,
      demo: "https://anuproybca.github.io/RentIt/Index.html",
      code: "https://github.com/anuproybca",
    },
    {
      id: 3,
      src: navbar,
    },
    {
      id: 4,
      src: reactSmooth,
    },
    {
      id: 5,
      src: webdev,
    },
    {
      id: 6,
      src: webdes,
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-full  pt-20"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, demo, code }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md  duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/3 px-4 py-1 m-2 font-semibold duration-200 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-md hover:scale-105">
                <a href={demo} target="blank">Demo</a>  
                </button>
                <button className="w-1/3 px-4 py-1 m-2 font-semibold duration-200 bg-gray-500 rounded-md hover:scale-105 hover:bg-gradient-to-r from-cyan-500 to-blue-500">
                <a href={code} target="blank">Code</a>  
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
