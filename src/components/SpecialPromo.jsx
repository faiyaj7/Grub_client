import React from "react";
import promotion from "../assets/promotion.jpg";
const SpecialPromo = () => {
  return (
    <section className="flex items-center justify-center flex-col lg:flex-row bg-black  w-full lg:mt-0 ">
      {/* Left Side */}
      <div className="h-full p-20">
        <h4 className="font-merriweatherSans font-bold text-orange-400 ">
          Special Combo Package
        </h4>
        <h1 className="text-white font-anton font-medium text-4xl my-4 w-full lg:w-[65%]">
          We provide fast burgers as fast as possible
        </h1>
        <p className="text-white font-Arimo text-sm mb-5">
          As well known we are hell of a busy.
        </p>
        <div className="flex items-center justify-start gap-10">
          <button className="bg-teal-600 hover:bg-teal-700 transition-all duration-300 py-2 px-6 lg:px-4 rounded-lg text-white font-Arimo">
            Order Now
          </button>
          {/* discount price */}
          <div className="flex gap-2 items-center">
            <span className="text-orange-600 font-Arimo font-extrabold text-2xl">
              $9.99
            </span>
            <span className="font-Arimo text-sm text-white font-semibold">
              $14.99
            </span>
          </div>
        </div>
      </div>
      {/* Right Side (Image) */}
      <div className="w-full lg:w-[35%] order-first">
        <img src={promotion} alt="promotion" />
      </div>
    </section>
  );
};

export default SpecialPromo;
