import React from 'react'
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import {HiOutlineMail} from "react-icons/hi";
import {BsFillPersonLinesFill} from "react-icons/bs";

const SocialLinks = () => {
    const links = [
      {
        id: 1,
        child: (
          <>
            LinkedIn <FaLinkedin size={22} />
          </>
        ),
        href: "https://www.linkedin.com/in/anuproybca/",
        style: "rounded-tr-md",
      },
      {
        id: 2,
        child: (
          <>
            GitHub <FaTwitter size={22} />
          </>
        ),
        href: "https://twitter.com/anuproybca",
      },
      {
        id: 3,
        child: (
          <>
            GitHub <FaGithub size={22} />
          </>
        ),
        href: "https://github.com/anuproybca",
      },
      {
        id: 4,
        child: (
          <>
            Mail <HiOutlineMail size={22} />
          </>
        ),
        href: "mailto:anuproybca@gmail.com",
      },
      {
        id: 5,
        child: (
          <>
            Resume <BsFillPersonLinesFill size={22} />
          </>
        ),
        href: "/Resume.pdf",
        style: "rounded-br-md",
        download: true,
      },
    ];
  
    return (
      <div className="hidden lg:flex flex-col top-[42%] left-0 fixed">
        <ul>
          {links.map(({ id, child, href, style, download }) => (
            <li
              key={id}
              className={
                "flex justify-between items-center w-36 h-7 px-3 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500" +
                " " +
                style
              }
            >
              <a
                href={href}
                className="flex justify-between items-center w-full text-white font-bold"
                download={download}
                target="_blank"
                rel="noreferrer"
              >
                {child}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };

export default SocialLinks
