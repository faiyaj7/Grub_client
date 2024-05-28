import React from "react";

const SpecialOffer = () => {
  return (
    <section className="flex items-center justify-around relative bg-yellow-50 h-[50vh]">
      {/* Left Side */}
      <div className="h-full w-[60%] bg-white p-20">
        <h4 className="font-merriweatherSans font-bold text-orange-400 ">
          Special Offer
        </h4>
        <h1 className="font-anton font-semibold text-4xl my-4 w-1/2">
          Good food, drinks & great company
        </h1>
        <p className="font-Arimo text-sm text-black/65 mb-5">
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
            <span className="font-Arimo text-sm font-semibold">350 BDT</span>
          </div>
        </div>
      </div>
      {/* Right Side (Image) */}
      <div className="absolute right-[15%] -top-15 w-[35%]">
        <img src="/chicken_roast.png" alt="chicken_roast" />
      </div>
    </section>
  );
};

export default SpecialOffer;
