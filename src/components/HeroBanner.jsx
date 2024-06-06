import React from "react";
import { FaFacebookF, FaTwitter, FaYoutube } from "react-icons/fa";
import heropic from "../assets/heropic.webp";
const HeroBanner = () => {
  return (
    <>
      <section className="bg-yellow-50 lg:bg-white h-fit lg:h-screen flex items-center justify-around px-0 lg:px-16 pt-20 flex-col md:flex-row ">
        {/* Left Part */}
        <div className="flex flex-col gap-5 px-8 lg:px-0">
          <h6 className="font-anton text-sm text-orange-400">
            Medium 2-topping Burger
          </h6>
          <h1 className="font-anton text-7xl  ">Are you hungry?</h1>
          <p className="text-black/45 font-Arimo text-sm">
            As a reputed delivery management we are very busy all days we advice
            to
          </p>
          {/* Buttons */}
          <div className="flex  justify-start gap-4">
            <button className="py-3 px-4 bg-orange-500/85 text-white rounded-md text-sm">
              Learn More
            </button>
            <button className="py-3 px-4 bg-green-500/85 text-white rounded-md text-sm">
              Check the Menu
            </button>
          </div>
          {/* Icons */}
          <div className="flex items-center justify-start gap-8">
            {/* Facebook icon */}
            <div className="flex items-center justify-center gap-2">
              <FaFacebookF />{" "}
              <span className="font-Arimo text-md">Facebook</span>
            </div>
            {/* Twitter icon */}
            <div className="flex items-center justify-center gap-2">
              <FaTwitter /> <span className="font-Arimo text-md">Twitter</span>
            </div>
            {/* Youtube icon */}
            <div className="flex items-center justify-center gap-2">
              <FaYoutube /> <span className="font-Arimo text-md">Youtube</span>
            </div>
          </div>
        </div>
        {/* Middle Part (Image) */}
        {/* in mobile cumulative layout shift happing bcos of it proof found by commenting the image */}
        <div className="w-4/5 lg:w-1/2 h-full order-first lg:order-none">
          <img src={heropic} alt="heropic" />
        </div>
        {/* Right Part */}
        <div className="hidden lg:flex flex-col items-center justify-center gap-10">
          <div className="flex items-center justify-around gap-14 text-right">
            <div className="w-4/5">
              <h1 className="font-anton">Great Location</h1>
              <p className="font-Arimo text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                quam.
              </p>
            </div>
            <span className="font-fraunces w-8 h-8 rounded-full bg-slate-300 p-2 text-sm">
              01
            </span>
          </div>
          <div className="flex items-center justify-around gap-14 text-right">
            <div className="w-4/5">
              <h1 className="font-anton">Nature First</h1>
              <p className="font-Arimo text-xs">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                quam.
              </p>
            </div>
            <span className="font-fraunces w-8 h-8 rounded-full bg-slate-300 p-2 text-sm">
              02
            </span>
          </div>
          <div className="flex items-center justify-around gap-14 text-right">
            <div className="w-4/5">
              <h1 className="font-anton">Healthy First</h1>
              <p className="font-Arimo text-xs ">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
                quam.
              </p>
            </div>
            <span className="font-fraunces w-8 h-8 rounded-full bg-slate-300 p-2  text-sm">
              03
            </span>
          </div>
        </div>
      </section>
      {/* Overlay over half of the width */}
      <div className="w-1/2 bg-yellow-50 h-screen absolute top-0 right-0 -z-10" />
    </>
  );
};

export default HeroBanner;
