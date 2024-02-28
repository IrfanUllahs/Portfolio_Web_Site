import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";

function Footer() {
  return (
    <section className="w-full sm:h-[360px] h-[500px] bg-colorprimary mt-[100px]     pt-5 md:pt-10 text-colorbgvariant flex flex-col items-center gap-8">
      <h1 className="text-[50px]  font-bold">IRFAN ULLAH</h1>
      <div className=" ">
        <ul className="flex list-none gap-4 text-[18px]  text-colorbgvariant flex-col sm:flex-row text-center ">
          <a href="#header" className="text-colorbgvariant">
            <li>Home</li>
          </a>
          <a href="#about" className="text-colorbgvariant">
            <li>About</li>
          </a>
          <a href="#experience" className="text-colorbgvariant">
            <li>Experience</li>
          </a>
          <a href="#portfolio" className="text-colorbgvariant">
            <li>Portfolio</li>
          </a>
          <a href="#testimonial" className="text-colorbgvariant">
            <li>Testimonilas</li>
          </a>
          <a href="#contact" className="text-colorbgvariant">
            <li>Contact Us</li>
          </a>
        </ul>
      </div>
      <div className="flex gap-4">
        <a
          className="bg-black text-white block p-3 rounded-xl hover:text-colorprimary  duration-500 "
          href="https://www.linkedin.com/in/irfan-ullah-2155b5235"
          target="_blank"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/IrfanUllahs"
          target="_blank"
          className="bg-black text-white block p-3 rounded-xl hover:text-colorprimary  duration-500  "
        >
          <FaGithub />
        </a>
        <a
          href="https://www.instagram.com/irfanullah8168/"
          target="_blank"
          className="bg-black text-white block p-3 rounded-xl hover:text-colorprimary  duration-500 "
        >
          <FaInstagram />
        </a>
      </div>
      <p className="text-[16px]  xt-colorbgvariant   mb-8 ">
        All right are reserved
      </p>
    </section>
  );
}

export default Footer;
