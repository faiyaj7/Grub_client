import React from "react";
import { Link } from "react-router-dom";
import urlFor from "../lib/imageBuilder.js";
import { LuBike } from "react-icons/lu";
import { FaStar } from "react-icons/fa";
import { FaRegClock, FaS } from "react-icons/fa6";
import { GoDot } from "react-icons/go";
import { FaDivide } from "react-icons/fa6";
import topRestaurant from "../assets/top_restaurant.svg";
const Products = ({ restaurants, setRestaurants }) => {
  
  return (
    <main className="w-full px-4">
      {/* Total Restaurants Found */}
      <h1 className="font-merriweatherSans font-semibold text-2xl text-pink-600">
        {restaurants.length < 10
          ? `0${restaurants.length} `
          : restaurants.length}
        Restaurants found.
      </h1>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-5 w-full">
        {/* Mapping */}
        {restaurants.map((item) => (
          <Link
            to={`/restaurants/menu/${item.slug.current}`}
            key={item._id}
            className="h-[400px] lg:h-[300px] mb-8"
          >
            {/* Hero Image of the Restaurant */}
            <div className="relative h-[55%]">
              <img
                src={urlFor(item.image).url()}
                alt={item.restaurant_name}
                className="object-cover h-full w-full"
              />
              {/* Voucher Tag */}
              {item.voucher_offer.exists ? (
                <div className="absolute top-[5%] left-[5%] bg-pink-500 w-fit rounded-lg flex items-center text-white px-4 py-1">
                  <FaDivide
                    size={12}
                    className="bg-white text-pink-500 rounded-full rotate-[330deg] mr-2"
                  />
                  <span className="text-xs font-merriweatherSans">
                    {" "}
                    Crazy : ${item.voucher_offer.price} off
                  </span>
                </div>
              ) : null}

              {/* Free Offer Tag */}
              {item.free_offer.exists ? (
                <div className="absolute top-[25%] left-[5%] bg-pink-500 w-fit rounded-lg flex items-center text-white px-4 py-1">
                  <FaDivide
                    size={12}
                    className="bg-white text-pink-500 rounded-full rotate-[330deg] mr-2"
                  />
                  <span className="text-xs font-merriweatherSans">
                    {" "}
                    Gift : Free Delivery
                  </span>
                </div>
              ) : null}
            </div>

            {/* Text Container */}
            <div className="shadow-2xl rounded-lg p-4 h-[45%]">
              {/* Restaurant name ,rating and reviews */}
              <div className="flex items-start lg:items-center justify-between flex-col lg:flex-row ">
                {/* Top Rated Badge and Restaurant Name */}
                <div className="flex items-center justify-center gap-2">
                  {/* Top Rated Badge */}
                  {item.reviews > 10 && (
                    <img
                      src={topRestaurant}
                      alt="Top Restaurant"
                      className="text-[#ec4899]"
                    />
                  )}
                  <h1 className="font-anton">{item.restaurant_name}</h1>
                </div>
                {/* Rating and Review */}
                <div className="flex items-center justify-center gap-1">
                  <FaStar className="text-[#ec4899]" />
                  <div className="flex items-center">
                    <h1 className="font-light font-merriweatherSans text-sm">
                      {item.rating}
                    </h1>
                    <h1 className="font-light font-merriweatherSans text-sm">
                      ({item.reviews}+)
                    </h1>
                  </div>
                </div>
              </div>
              {/* Currency */}
              <h1 className="py-1 font-merriweatherSans font-light text-sm">
                $ . Dollars
              </h1>
              {/* Restaurant Categories/Cuisines */}
              <div className="flex items-center justify-start gap-5 truncate ">
                {item.cuisines.map((item, index) => (
                  <div
                    className="flex items-center justify-start gap-1 py-1"
                    key={index}
                  >
                    <h1 className="font-fraunces text-sm font-medium">
                      {item}
                    </h1>
                    <GoDot
                      className="text-white bg-pink-400 rounded-full"
                      size={10}
                    />
                  </div>
                ))}
              </div>
              {/* container of time duration and free delivery */}
              <div className="flex items-center justify-start gap-4">
                {/* Resturant Time Duration */}
                <div className="flex items-center justify-center gap-1">
                  {" "}
                  <FaRegClock />
                  <h1 className="font-merriweatherSans text-sm font-light">
                    {item.min_delivery_time} - {item.max_delivery_time} min
                  </h1>
                </div>
                {/* Resturant Free Offer */}
                {item.free_offer.exists ? (
                  <div className="text-pink-500 font-anton flex items-center gap-2">
                    <LuBike /> Free
                  </div>
                ) : null}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Products;
