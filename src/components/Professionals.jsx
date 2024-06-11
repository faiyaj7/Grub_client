import React from "react";
import { professionalStaffs } from "../constants/MenuList";
import { FaInstagram, FaXTwitter } from "react-icons/fa6";
import { FaLinkedin, FaFacebookF } from "react-icons/fa";

const Professionals = () => {
  const professionalPeople = professionalStaffs.slice(0, 3);
  return (
    <section className="bg-yellow-50 pt-20  ">
      {/* Top part */}
      <div className="flex items-center justify-around px-4 lg:px-0 ">
        {/* Left part */}
        <div className="">
          <h4 className="font-merriweatherSans text-lg">Our Professionals</h4>
          <h1 className="font-anton text-5xl">Meet our stuff</h1>
        </div>
        {/* Right part */}
        <div className="">
          <button className="py-2 px-5 bg-orange-500 font-Arimo font-medium text-white rounded-md">
            View All Staff
          </button>
        </div>
      </div>
      {/* Bottom part */}
      <div className="grid grid-cols-1  lg:grid-cols-3 gap-5 pt-5 w-4/5 mx-auto">
        {professionalPeople.map(({ name, image, experience },index) => (
          <div className="h-full w-full bg-white/65 shadow-lg rounded-lg flex items-center gap-6 flex-col" key={index}>
            <img
              src={image}
              alt="name"
              className="h-1/2 w-1/2 object-cover mx-auto rounded-full mt-5"
            />
            <h1 className="text-center font-anton text-xl">{name}</h1>
            <h4 className="text-center font-Arimo text-orange-500 font-bold">
              {experience} Years Experience
            </h4>
            <div className="flex items-center justify-center gap-4 mt-2">
              <FaFacebookF className="bg-slate-100/85 w-6 h-6 p-1 rounded-full cursor-pointer" />
              <FaXTwitter className="bg-slate-100/85 w-6 h-6 p-1 rounded-full cursor-pointer" />
              <FaInstagram className="bg-slate-100/85 w-6 h-6 p-1 rounded-full cursor-pointer" />
              <FaLinkedin className="bg-slate-100/85 w-6 h-6 p-1 rounded-full cursor-pointer" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Professionals;
