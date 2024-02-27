import React from "react";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { TypeAnimation } from "react-type-animation";
import Typewriter from "typewriter-effect";

function Header() {
  return (
    <section
      className="h-lvh  flex justify-center  sm:w-[90%] md:w-[86%] lg:w-[75%]  mx-auto mt-[0px]"
      id="header"
    >
      <div className="text-center flex gap-4 flex-col items-center relative w-full h-full ">
        <h5 className="font-medium">Hello I'am</h5>
        {/* <h1 className="text-[50px] font-bold  text-colorprimary tracking-[5px]">
          IRFAN ULLAH
        </h1> */}
        <div className="text-[50px] font-bold text-colorprimary tracking-5">
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 200,
            }}
            onInit={(typewriter) => {
              typewriter
                .typeString("IRFAN ULLAH.")
                .callFunction(() => {
                  console.log("String typed out!");
                })
                .pauseFor(4000)
                .deleteAll()

                .start();
            }}
          />
        </div>

        <h5 className="text-[#fff4f4b7] font-medium">Front End Developer</h5>
        {/* buttons  */}
        <div className="flex gap-3 ">
          <a
            href={"../../../public/assets/cv.pdf"}
            download
            className="border-colorprimary border-2 px-4 py-2 rounded-md hover:bg-white hover:text-colorbg "
          >
            Download CV
          </a>
          <a className="border-colorprimary border-2 px-4 py-2 rounded-md bg-colorprimary text-colorbgvariant">
            Let's Talk
          </a>
        </div>
        <div className="w-[300px] sm:w-[350px]  h-[450px] bg-gradient-to-b from-colorprimary to-transparent rounded-t-full overflow-hidden">
          <img
            src={"../../../public/assets/me.png"}
            className="hover:scale-110 duration-1000 object-contain w-full mt-8"
          />
        </div>
        <div className="absolute rotate-90 left-[10%] hidden  top-[450px]   sm:flex gap-4 text-[20px]">
          <a
            href="https://www.linkedin.com/in/irfan-ullah-2155b5235"
            target="_blank"
          >
            <FaLinkedin />
          </a>
          <a href="https://github.com/IrfanUllahs" target="_blank">
            <FaGithub />
          </a>
          <a href="https://www.instagram.com/irfanullah8168/" target="_blank">
            <FaInstagram className="hover:text-white text-colorprimary cursor-pointer" />
          </a>
        </div>
        <div className="absolute rotate-90 right-[10%] top-[450px] hidden    sm:flex  gap-4 text-[20px] cursor-pointer">
          <p className="hover:text-white text-colorprimary">Scroll Down</p>
        </div>
      </div>
    </section>
  );
}

export default Header;
