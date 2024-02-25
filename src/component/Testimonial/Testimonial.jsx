import React from "react";

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Customers = [
  {
    id: 1,
    title: "Saleem Khan",
    comment:
      " This is very nice and professional guy. He has expertise in his skill very awsome. Very humble and has good communication skills and understand the requirement and needs of customersThis is very nice and professional guy. He has expertise in his skill very awsome. Very humble and has good communication skills and understand the requirement and needs of customers",
    img: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 2,
    title: "Asghar Ali",
    comment:
      " This is very nice and professional guy. He has expertise in his skill very awsome. Very humble and has good communication skills and understand the requirement and needs of customersThis is very nice and professional guy. He has expertise in his skill very awsome. Very humble and has good communication skills and understand the requirement and needs of customers",
    img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1480&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    id: 3,
    title: "Waqas Khan",
    comment:
      " This is very nice and professional guy. He has expertise in his skill very awsome. Very humble and has good communication skills and understand the requirement and needs of customersThis is very nice and professional guy. He has expertise in his skill very awsome. Very humble and has good communication skills and understand the requirement and needs of customers",
    img: "https://images.unsplash.com/photo-1590086782792-42dd2350140d?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];
function Testimonial() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    arrows: false,
  };
  return (
    // <section className="h-[550px] flex justify-center flex-col sm:w-[90%] md:w-[86%] lg:w-[75%] mt-3 items-center  mx-auto gap-4 border-2 py-[30px] md:px-[100px] px-2 text-white ">
    //   <h5 className="text-[#edc8c8b7] font-medium">Review from Clients</h5>
    //   <h1 className="text-[35px] font-medium text-colorprimary mb-3">
    //     Testimonials
    //   </h1>
    //   {Customers.map((item) => (
    //     <div
    //       className="lg:w-[60%] lg:px-[10px] w-full h-[90%] flex flex-col gap-3 items-center  bg-colorbgvariant rounded-xl pt-4"
    //       key={item.id}
    //     >
    //       <div className=" w-[100px] h-[80px] overflow-hidden rounded-full">
    //         <img
    //           src={item.img}
    //           className="object-cover rounded-full object-center"
    //         />
    //       </div>
    //       <p className="font-bold text-[20px]">{item.title}</p>
    //       <p className="text-center sm:text-[16px] text-[14px]">
    //         {item.comment}
    //       </p>
    //     </div>
    //   ))}
    // </section>
    <section className="h-[600px]  gap-3 md:gap-6  sm:w-[90%] md:w-[86%] lg:w-[75%] mt-3  mx-auto  flex flex-col items-center justify-center  ">
      <h5 className="text-[#edc8c8b7] font-medium md:mt-8">
        Review from Clients
      </h5>
      <h1 className="text-[35px] font-medium text-colorprimary mb-3">
        Testimonials
      </h1>
      <div className="  lg:w-[50%] h-[90%] md:w-[70%] w-[95%] md:mt-4 border-2 px-2 ">
        <Slider {...settings}>
          {Customers.map((item) => (
            <div key={item.id} className="w-full ">
              <div className="p-[10px] w-full h-[100%] flex flex-col gap-3 items-center justify-center  bg-colorbgvariant rounded-xl pt-4 ">
                <div className=" w-[100px] h-[80px] overflow-hidden rounded-full">
                  <img
                    src={item.img}
                    className="object-cover rounded-full object-center"
                  />
                </div>
                <p className="font-bold text-[20px]">{item.title}</p>
                <p className="text-center sm:text-[16px] text-[14px]">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}

export default Testimonial;
