import React from "react";
import downloadgooglestore from "../assets/downloadgoogle.webp";
import downloadappstore from "../assets/app-store-badge.webp";
import mobiledownload from "../assets/mobiledownload.webp";
const MobileDownload = () => {
  return (
    <section className="hidden bg-yellow-50 lg:flex items-center justify-around  w-full h-[65vh] mx-auto relative pt-20 ">
      {/* Left part (Image) */}
      <div className="absolute top-5 right-[50%] w-1/3">
        <img
          src={mobiledownload}
          alt="Mobile"
          className="overflow-hidden w-full "
        />
      </div>
      {/* Right Part  */}
      <div className="bg-white/65 w-1/2 h-full p-8 shadow-lg rounded-lg">
        <h1 className="font-merriweatherSans text-orange-500 text-end">
          Download App
        </h1>
        <h1 className="font-anton text-4xl text-end py-2 capitalize w-1/2 ml-auto">
          best app for food delivery
        </h1>
        {/* buttons */}
        <div className="w-[60%] ml-auto grid grid-rows-2 gap-6">
          {/* Google Download */}
          <div className="flex items-center justify-center gap-1 shadow-md w-4/5 ml-auto">
            <img
              src={downloadgooglestore}
              alt="Google Store"
              className="h-1/5 w-1/5"
            />
            <div className="p-4">
              <h1 className="font-merriweatherSans text-xs font-medium">
                Android App on{" "}
              </h1>
              <h1 className="font-Arimo text-sm font-bold">Google Play</h1>
            </div>
          </div>
          {/* App Store Download */}
          <div className="flex items-center justify-center gap-1 shadow-md w-4/5 ml-auto">
            <img
              src={downloadappstore}
              alt="App Store"
              className="h-1/5 w-1/5 object-cover"
            />
            <div className="p-4">
              <h1 className="font-merriweatherSans text-xs font-medium">
                Android App on{" "}
              </h1>
              <h1 className="font-Arimo text-sm font-bold">Google Play</h1>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileDownload;
