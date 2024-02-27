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
          activeSection === "header" && "bg-gray-950 text-white"
        }`}
        href="#header"
      >
        <FaHome className="text-[30px]" />
      </a>
      <a
        className={`p-2 rounded-full hover:bg-gray-950 ${
          activeSection === "about" && "bg-gray-950 text-white"
        }`}
        href="#about"
      >
        <IoMdContact className="text-[30px]" />
      </a>
      <a
        className={`p-2 rounded-full hover:bg-gray-950 ${
          activeSection === "experience" && "bg-gray-950 text-white"
        }`}
        href="#experience"
      >
        <FaTools className="text-[30px]" />
      </a>
      <a
        className={`p-2 rounded-full hover:bg-gray-950 ${
          activeSection === "portfolio" && "bg-gray-950 text-white"
        }`}
        href="#portfolio"
      >
        <BiBook className="text-[30px]" />
      </a>
      <a
        className={`p-2 rounded-full hover:bg-gray-950 ${
          activeSection === "contact" && "bg-gray-950 text-white"
        }`}
        href="#contact"
      >
        <MdContactPhone className="text-[30px]" />
      </a>
    </div>
  );
}

export default Navbar;
