import React from "react";
import { FaHome } from "react-icons/fa";
import { IoMdContact } from "react-icons/io";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import { MdContactPhone } from "react-icons/md";

import ScrollSpy from "./ScrollSpy";

function Navbar() {
  const activeSection = ScrollSpy();

  return (
    <div className="fixed bottom-8 sm:bottom-4 left-1/2 transform -translate-x-1/2 w-[300px] sm:w-[350px] z-50 bg-[#0000004d] flex justify-around items-center text-[20px] rounded-full backdrop-blur-[15px] h-[70px]">
      <a
        className={`p-2 hover:bg-gray-950 rounded-full ${
          activeSection === "header" &&
          // Corrected comparison
          "bg-gray-950 text-white"
        }`}
        href="#header"
        onClick={() => setActive("header")} // Added onClick event to set active section
      >
        <FaHome className="text-[30px]" />
      </a>
      <a
        className={`p-2 rounded-full hover:bg-gray-950 ${
          activeSection === "about" && "bg-gray-950 text-white"
        }`}
        href="#about"
        onClick={() => setActive("about")} // Added onClick event to set active section
      >
        <IoMdContact className="text-[30px]" />
      </a>
      <a
        className={`p-2 rounded-full hover:bg-gray-950 ${
          activeSection === "experience" && "bg-gray-950 text-white"
        }`}
        href="#experience"
        onClick={() => setActive("experience")} // Added onClick event to set active section
      >
        <FaTools className="text-[30px]" />
      </a>
      <a
        className={`p-2 rounded-full hover:bg-gray-950 ${
          activeSection === "portfolio" && "bg-gray-950 text-white"
        }`}
        href="#portfolio"
        onClick={() => setActive("experience")} // Added onClick event to set active section
      >
        <BiBook className="text-[30px]" />
      </a>
      <a
        className={`p-2 rounded-full hover:bg-gray-950 ${
          activeSection === "contact" && // Corrected section ID
          "bg-gray-950 text-white"
        }`}
        href="#contact" // Corrected href
        onClick={() => setActive("contact")} // Added onClick event to set active section
      >
        <MdContactPhone className="text-[30px]" />
      </a>
    </div>
  );
}

export default Navbar;
