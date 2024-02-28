import React from "react";
import { FaCode } from "react-icons/fa";
import { FaPeopleCarry } from "react-icons/fa";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";

const About = () => {
  return (
    <section
      className="xl:h-lvh h-full  flex justify-center pt-[40px] sm:w-[90%] md:w-[86%] lg:w-[75%]  mx-auto border-2  "
      id="about"
    >
      <div className="text-center w-full flex gap-3 flex-col">
        <h5 className="text-[#fff4f4b7] font-medium">Get To Know</h5>
        <h1 className="text-[35px] font-medium text-colorprimary ">About Me</h1>
        {/* content section is here */}
        <div className="flex h-[100%]  w-[100%]  gap-8 overflow-hidden xl:justify-between xl:flex-row flex-col items-center   ">
          {/* this is image div */}
          <div className="sm:w-[350px] w-[250px] sm:h-[60%] h-[30%]  bg-gradient-to-tr rounded-[20px] from-colorprimary to-transparent  mt-9 ml-9  ">
            <img
              src={"../../../assets/me-about.jpg"}
              className="w-full h-full object-cover overscroll-none rounded-[20px] rotate-12 hover:rotate-0 duration-500 "
            />
          </div>
          <div className="sm:w-[500px] w-[300px] sm:h-[100%] h-[70%]  ml-5 flex gap-5 items-start   flex-col   justify-center ">
            <div className="flex gap-5 justify-center sm:flex-nowrap flex-wrap  ">
              <div className="h-[150px] sm:w-[150px] w-[250px]  rounded-[20px] p flex justify-center flex-col items-center gap-3 hover:bg-colorbg border border-transparent  hover:border hover:border-gray-600 duration-500">
                <FaCode className="text-[30px] text-colorprimary" />
                <h1 className="font-bold text-[18px]">Experience</h1>
                <p className="text-[#fff4f4b7] text-[14px]">1+ Year Working</p>
              </div>
              <div className="h-[150px] sm:w-[150px] w-[250px] rounded-[20px] bg-colorbgvariant flex flex-col items-center justify-center gap-3 hover:bg-colorbg border border-transparent  hover:border hover:border-gray-600 duration-500">
                <FaPeopleCarry className="text-[30px] text-colorprimary" />
                <h1 className="font-bold text-[18px]">Clients</h1>
                <p className="text-[#fff4f4b7] text-[14px]">100+ World Wide</p>
              </div>
              <div className="h-[150px] sm:w-[150px] w-[250px] rounded-[20px] bg-colorbgvariant flex flex-col items-center justify-center gap-3 hover:bg-colorbg border border-transparent   hover:border-gray-600 duration-500">
                <AiOutlineFundProjectionScreen className="text-[30px] text-colorprimary" />
                <h1 className="font-bold text-[18px]">Projects</h1>
                <p className="text-[#fff4f4b7] text-[14px]">20+ Completed!</p>
              </div>
            </div>
            <p className="text-left text-gray-400">
              The max-content sizing keyword represents the intrinsic maximum
              width or height of the content. For text content this means that
              the content will not wrap at all even if it causes overflows
            </p>
            <a className="border-colorprimary border-2 px-4 py-2 rounded-md bg-colorprimary text-colorbgvariant ">
              Let' Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
