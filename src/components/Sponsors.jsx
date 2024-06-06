import React from "react";
import { sponsors } from "../constants/MenuList";

const Sponsors = () => {
  return (
    <section className="grid grid-cols-2 lg:grid-cols-6 gap-2 px-4  bg-yellow-50 h-fit lg:h-[20vh] pt-4">
      {sponsors.map(({ image }, index) => (
        <img src={image} alt={index} key={index} className="bg-white h-1/2 w-full object-contain"/>
      ))}
    </section>
  );
};

export default Sponsors;
