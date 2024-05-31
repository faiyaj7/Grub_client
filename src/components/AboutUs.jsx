import React from "react";
import { aboutUs } from "../constants/MenuList";

const AboutUs = () => {
  return (
    <section className="bg-yellow-50">
      <h3 className="font-merriweatherSans text-red-500 font-bold text-center">About Us</h3>
      <h1 className="font-anton w-full text-4xl text-center p-4">
        Order delivery in just 30 minutes
      </h1>
      <div className="grid grid-cols-3 w-4/5 mx-auto gap-5">
        {aboutUs.map(({ id, title, desc, image }) => (
          <div className="w-full bg-white rounded-md shadow-lg p-3">
            <img src={image} alt={title} className="w-1/5 h-1/4 "/>
            <h1 className="font-anton py-2">{title}</h1>
            <p className="font-Arimo">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AboutUs;
