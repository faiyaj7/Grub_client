import React from "react";
import { successStories } from "../constants/MenuList";

const SuccessStories = () => {
  return (
    <section className="bg-yellow-50 p-20">
      <h1 className="font-merriweatherSans text-center text-orange-500 text-lg">
        Success Stories
      </h1>
      <h1 className="font-anton text-center text-4xl py-4">
        Get to Know about Us
      </h1>
      <div className="grid grid-cols-3 w-4/5 mx-auto gap-14 ">
        {successStories.map(({ id, value, title }) => (
          <div key={id} className="bg-white  rounded-md w-1/2 shadow">
            <h1 className="text-orange-400 font-merriweatherSans text-center text-2xl p-4">
              {value}
            </h1>
            <h1 className="font-anton text-center ">{title}</h1>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SuccessStories;
