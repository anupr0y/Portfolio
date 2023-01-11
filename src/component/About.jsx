import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-full pt-28 md:pt-16 bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">

          As a front-end developer, I am dedicated to crafting intuitive, engaging, and visually stunning user experiences for the web. With a strong foundation in <b> HTML, CSS, JavaScript, Bootstrap, Tailwind, and React </b> and a passion for staying up-to-date with the latest technologies and best practices, I am ready to take on any challenge that comes my way. Whether you are looking to build a new web application from scratch or update an existing site, I have the skills and experience to bring your vision to life.
        </p>

        <br />

        <p className="text-xl">
          Take a look at my portfolio to see some of the projects I have worked on, and don't hesitate to get in touch if you have a project that you think I could help with. Let's build something great together!
        </p>
      </div>
    </div>
  );
};

export default About;
