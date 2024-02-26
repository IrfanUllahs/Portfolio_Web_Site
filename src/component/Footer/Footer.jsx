import React from "react";

function Footer() {
  return (
    <section className="w-full sm:h-[200px] bg-colorprimary mt-[100px]     pt-5 md:pt-10 text-colorbgvariant flex flex-col items-center gap-8">
      <h1 className="text-[50px]  font-bold">IRFAN ULLAH</h1>
      <div className="md:hidden">
        <ul className="flex list-none gap-3 text-[16px] font-semibold text-colorbgvariant flex-col sm:flex-row text-center ">
          <a href="#header" className="text-colorbgvariant">
            <li>Home</li>
          </a>
          <a href="#about" className="text-colorbgvariant">
            <li>About</li>
          </a>
          <a href="#experience" className="text-colorbgvariant">
            <li>Experience</li>
          </a>

          <li>Portfolio</li>
          <li>Testimonilas</li>
          <li>Contact Us</li>
        </ul>
      </div>
      <p className="text-[16px]  text-black">All right are reserved</p>
    </section>
  );
}

export default Footer;
