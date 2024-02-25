import React from "react";
import { TiHtml5 } from "react-icons/ti";

function Experience() {
  return (
    <section
      className="xl:h-lvh h-full  flex justify-center flex-col sm:w-[90%] md:w-[86%] lg:w-[75%] mt-3 items-center  mx-auto  gap-4 border-2  "
      id="experience"
    >
      <h5 className="text-[#fff4f4b7] font-medium">What Skills I Have</h5>
      <h1 className="text-[35px] font-medium text-colorprimary mb-3">
        My Experience
      </h1>
      <div className=" h-[80%] w-[90%] flex justify-center items-center gap-6">
        <div className="w-full h-full  rounded-[20px] bg-colorbgvariant flex justify-center flex-col items-center gap-10 hover:bg-colorbg border  border-transparent  hover:border hover:border-gray-600 duration-500 sm:text-left text-center">
          <div className="flex justify-around w-full h-[22%]">
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/html-5-svgrepo-com.svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">HTML</p>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/css-5-svgrepo-com.svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">CSS</p>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/bootstrap-fill-svgrepo-com.svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">
                Bootstrap
              </p>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/tailwindcss-icon-svgrepo-com.svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">
                Tailwind
              </p>
            </div>
            {/* <div className="w-[20%] flex flex-col justify-center items-center gap-4">
              <p className="text-[500%]  h-[100%] mt-[30px]  ">💅</p>
              <p className="font-semibold md:text-[18px] text-[10px] mt-[40px]">
                Styled Component
              </p>
            </div> */}
          </div>
          <div className="flex justify-around w-full h-[22%]">
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/javascript-svgrepo-com.svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">
                JavaScript
              </p>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/react-svgrepo-com.svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">React</p>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/redux-logo-svgrepo-com.svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">Redux</p>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/chakraui-svgrepo-com (1).svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">
                Chakra Ui
              </p>
            </div>
            {/* <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/git-svgrepo-com.svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">Git</p>
            </div> */}
          </div>
          <div className="flex justify-around w-full h-[22%]">
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/nodejs-icon-svgrepo-com.svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">
                Node JS
              </p>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/express-js-icon.svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">
                Express JS
              </p>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/mongo-svgrepo-com.svg" />
              <p className="font-semibold md:text-[18px] text-[10px]">
                MongoDB
              </p>
            </div>
            <div className="w-[20%] flex flex-col justify-center items-center">
              <img
                src="../../../public/Skill/Daco_2749343.png"
                className="object-contain"
              />
              <p className="font-semibold md:text-[18px] text-[10px]">
                Mongoose
              </p>
            </div>
            {/* <div className="w-[20%] flex flex-col justify-center items-center">
              <img src="../../../public/Skill/postman-icon-svgrepo-com.svg" />
              <p className="font-semibold md:text-[18px] text-[14px]">
                Postman
              </p>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
