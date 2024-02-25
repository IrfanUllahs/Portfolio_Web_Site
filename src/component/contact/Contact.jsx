import React from "react";
import { MdMailOutline } from "react-icons/md";

import { BsWhatsapp } from "react-icons/bs";
import { FaFacebookMessenger } from "react-icons/fa";
import EmailForm from "./EmailForm";

function Contact() {
  return (
    <section
      className="sm:h-lvh  flex justify-center flex-col sm:w-[90%] md:w-[86%] lg:w-[75%] mt-3 items-center  mx-auto  gap-4 border-2  "
      id="experience"
    >
      <h5 className="text-[#fff4f4b7] font-medium">My Recent Work</h5>
      <h1 className="text-[35px] font-medium text-colorprimary mb-3">
        Portfolio
      </h1>
      <div className="w-full h-[90%]  border-2 border-red-600 flex flex-col sm:flex-row p-4 gap-6">
        <div className="sm:w-1/2 w-full sm:h-full  h-[50%] border-2 border-green-600 flex flex-col items-center gap-2 justify-center ">
          <a
            href="#"
            className="text-white xl:w-1/2 w-[80%] h-[30%] flex flex-col justify-center items-center   "
          >
            <div className=" rounded-xl w-full h-full  gap-[2px] bg-colorbgvariant hover:bg-colorbg border border-transparent  hover:border hover:border-gray-600 duration-500 flex flex-col items-center">
              <MdMailOutline className="text-[40px]" />
              <p className="font-bold text-[18px]">Email</p>
              <p className="font-bold text-[14px]">khange221133@gmail.com</p>
              <p className="text-colorprimary">Send a message</p>
            </div>
          </a>
          <a
            href="#"
            className="text-white xl:w-1/2 w-[80%] h-[30%] flex flex-col justify-center items-center"
          >
            <div className=" rounded-xl w-full h-full flex flex-col justify-center items-center gap-[2px] bg-colorbgvariant hover:bg-colorbg border border-transparent  hover:border hover:border-gray-600 duration-500">
              <FaFacebookMessenger className="text-[40px]" />
              <p className="font-bold text-[18px]">Messanger</p>
              <p className="font-bold text-[14px]">IrfanUllah</p>
              <p className="text-colorprimary">Send a message</p>
            </div>
          </a>
          <a
            href="#"
            className=" text-white xl:w-1/2 w-[80%] h-[30%] flex flex-col justify-center items-center "
          >
            <div className=" rounded-xl w-full h-full flex flex-col justify-center items-center gap-[2px] bg-colorbgvariant hover:bg-colorbg border border-transparent  hover:border hover:border-gray-600 duration-500">
              <BsWhatsapp className="text-[40px]" />
              <p className="font-bold text-[18px]">WhatsApp</p>
              <p className="font-bold text-[14px]">khange221133@gmail.com</p>
              <p className="text-colorprimary">Send a message</p>
            </div>
          </a>
        </div>
        <div className="sm:w-1/2 w-full sm:h-full  h-[50%] border-2 border-green-600 flex flex-col items-center gap-2 justify-center px-3  ">
          <EmailForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
