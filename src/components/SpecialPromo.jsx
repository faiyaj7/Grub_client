import React from "react";

const SpecialPromo = () => {
  return (
    <section className="flex items-center justify-center bg-black  w-full mt-20">
      {/* Left Side */}
      <div className="h-full p-20">
        <h4 className="font-merriweatherSans font-bold text-orange-400 ">
          Special Combo Package
        </h4>
        <h1 className="text-white font-anton font-medium text-4xl my-4 w-[65%]">
         We provide fast burgers as fast as possible
        </h1>
        <p className="text-white font-Arimo text-sm mb-5">
          As well known we are hell of a busy.
        </p>
        <div className="flex items-center justify-start gap-10">
          <button className="bg-teal-600 hover:bg-teal-700 transition-all duration-300 py-2 px-4 rounded-lg text-white font-Arimo">
            Order Now
          </button>
          {/* discount price */}
          <div className="flex gap-2 items-center">
            <span className="text-orange-600 font-Arimo font-extrabold text-2xl">
              200 BDT
            </span>
            <span className="font-Arimo text-sm text-white font-semibold">350 BDT</span>
          </div>
        </div>
      </div>
      {/* Right Side (Image) */}
      <div className="w-[35%]">
        <img src="/promotion.jpg" alt="promotion" />
      </div>
    </section>
  );
};

export default SpecialPromo;
