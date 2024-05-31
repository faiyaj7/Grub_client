import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { popularMenu } from "../constants/MenuList";
const PopularMenu = () => {
  return (
    <section className="h-screen bg-yellow-50 p-20 ">
      {/* Heading */}
      <h6 className="font-merriweatherSans text-center ">Our Popular Menu</h6>
      <h1 className="font-anton text-center text-6xl my-10">Went to eat?</h1>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {popularMenu.map((item) => (
          <SwiperSlide>
            <div className="grid grid-cols-4 gap-1 px-24 ">
              {item.map((singleItem, index) => (
                <div key={index} className="bg-white rounded-md p-4  h-full">
                  <h1 className="font-merriweatherSans uppercase text-lg">
                    {singleItem.name}
                  </h1>
                  <h1 className="p-1 font-Arimo text-sm text-black/65">
                    {singleItem.desc}
                  </h1>
                  <img
                    src={singleItem.image}
                    alt={singleItem.name}
                    className="rounded-lg h-[150px] w-full object-cover"
                  />
                </div>
              ))}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default PopularMenu;
