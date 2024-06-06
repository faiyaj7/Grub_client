import React from "react";
import { recentArticles } from "../constants/MenuList";
import { FaArrowRight } from "react-icons/fa6";
const Article = () => {
  return (
    <section className="bg-yellow-50 px-4 lg:px-20 pt-[40rem] lg:py-10">
      {/* Heading */}
      <h4 className="text-sm text-center text-orange-500 font-merriweatherSans">
        Recent Article
      </h4>
      <h1 className="text-center font-anton text-4xl my-5">
        Latest News & Blog
      </h1>
      {/* Articles Mapping */}
      <div className="grid grid-cols-1 lg:grid-cols-3 mx-auto gap-4 w-full lg:w-[75%]">
        {recentArticles.map(({ date, desc, image }, index) => (
          <div className="bg-white rounded-md w-full h-fit" key={index}>
            <h4 className="font-merriweatherSans text-xs text-orange-600 font-bold px-6 pt-4">
              {date}
            </h4>
            <h1 className="block truncate font-Arimo font-medium px-6 py-4  ">
              {desc}
            </h1>
            <img
              src={image}
              alt={index}
              className="h-1/2 w-full object-cover rounded-b-md  "
            />
            <button className="flex items-center justify-center gap-2 py-4 px-6 text-green-500 hover:text-green-600 transition-all duration-300 font-bold uppercase text-xs font-Arimo">
              <FaArrowRight /> Read More
            </button>
          </div>
        ))}
      </div>
      {/* Button */}
      <div className="flex items-center justify-center mt-2">
        <button className="py-4 px-5 bg-green-500 hover:bg-green-600 transition-all duration-300 text-white font-Arimo rounded-md ">
          See all blog
        </button>
      </div>
    </section>
  );
};

export default Article;
