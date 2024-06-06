import React from "react";
import { FaQuoteRight } from "react-icons/fa";
import { customerFeedback } from "../constants/MenuList";
import Rating from "react-rating";
import { IoMdStar, IoMdStarOutline } from "react-icons/io";

const CustomerFeedback = () => {
  return (
    <section className="relative w-full pt-20 bg-yellow-50">
      {/* Left Side */}
      <div className="w-full lg:w-2/3 bg-black/85 px-5 lg:pl-20 py-20 rounded-r-2xl">
        <h3 className="text-orange-500 font-merriweatherSans">
          Customer Feedback
        </h3>
        <h1 className="font-anton text-4xl text-white py-4">
          What do our clients say?
        </h1>
        <p className="text-white font-Arimo font-medium w-full lg:w-1/2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates
          perferendis eligendi explicabo! Consectetur praesentium aliquam
          distinctio dolor necessitatibus laboriosam itaque!
        </p>
        <div className="flex items-center justify-start  gap-5 text-white py-10">
          <div className="">
            <h1 className="font-Arimo text-orange-500 text-2xl font-bold">
              14k+
            </h1>
            <h1 className="font-merriweatherSans text-sm font-medium uppercase">
              happy customer
            </h1>
          </div>
          <div className="">
            <h1 className="font-Arimo text-orange-500 text-2xl font-bold">
              68k+
            </h1>
            <h1 className="font-merriweatherSans text-sm font-medium uppercase">
              Food menu
            </h1>
          </div>{" "}
          <div className="">
            <h1 className="font-Arimo text-orange-500 text-2xl font-bold">
              16k+
            </h1>
            <h1 className="font-merriweatherSans text-sm font-medium uppercase">
              Award Winning
            </h1>
          </div>
        </div>
      </div>
      {/* Right Side (Customer Feedback) */}
      <div className="absolute top-[90%] lg:top-[60%] lg:-translate-y-[50%] lg:right-10 grid grid-cols-1 lg:grid-cols-2 w-full lg:w-1/2 h-fit gap-4 px-4">
        {customerFeedback.map(({ name, position, rating, desc, image }) => (
          /* Customer */
          <div className="bg-white w-full p-6 rounded-lg shadow-xl" key={name}>
            {/* Top part */}
            <div className="flex items-center justify-between">
              <img
                src={image}
                alt={name}
                width={100}
                height={100}
                className="rounded-md"
              />
              <FaQuoteRight className="text-orange-500" />
            </div>
            {/* Middle part (Description) */}
            <p className="w-full py-4 font-Arimo">{desc}</p>

            {/* Bottom part */}
            <div className="flex items-center justify-between">
              {/* Personal Info */}
              <div className="">
                <h1 className="font-merriweatherSans font-bold">{name}</h1>
                <h1 className="font-Arimo">{position}</h1>
              </div>
              {/* Rating */}
              <div className="">
                <Rating
                  start={1}
                  stop={6}
                  step={1}
                  initialRating={rating + 1}
                  readonly
                  fullSymbol={<IoMdStar className="text-orange-600" />}
                  emptySymbol={<IoMdStarOutline />}
                />
                <h1 className="text-black/65 font-Arimo uppercase text-xs">
                  {rating} Stars
                </h1>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerFeedback;
