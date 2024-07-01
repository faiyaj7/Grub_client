import React, { useEffect, useState } from "react";
import { Cuisines, Offer, Sort } from "../constants/Filter";
import { IoIosArrowUp } from "react-icons/io";
const Filter = ({ filterData, setFilterData }) => {
  const { selectedSort, selectedOffer, selectedCuisines } = filterData;
  const [showMore, setShowMore] = useState(false);

  return (
    <aside className="border border-black/10 pt-10 px-5 w-[25%] h-[600px] overflow-y-scroll">
      <div className="flex items-center justify-between">
        <h1 className="font-anton text-2xl ">Filter</h1>
        <button className="text-pink-500 font-merriweatherSans font-medium">
          Clear all
        </button>
      </div>
      {/* Sorting */}
      <div className="">
        <h1 className="font-merriweatherSans text-black/45 text-xl pt-4 mb-1">
          Sort By
        </h1>
        {/* Sorting filter map */}
        {Sort.map(({ name, id }) => (
          <div className="flex items-center justify-start gap-2 " key={name}>
            <div className="grid place-items-center">
              <input
                type="radio"
                id={id}
                checked={selectedSort === name}
                onChange={() =>
                  setFilterData(() => ({ ...filterData, selectedSort: name }))
                }
                className="peer 
                col-start-1 row-start-1
                appearance-none shrink-0
                w-5 h-5 border-2 border-pink-500 rounded-full 
                focus:outline-none focus:ring-offset-0 focus:ring-1 focus:ring-pink-400"
              />
              <div className="pointer-events-none peer-checked:bg-pink-500 col-start-1 row-start-1 w-3 h-3 rounded-full bg-white" />
            </div>
            <label
              htmlFor={id}
              className="text-nowrap text-lg font-Arimo capitalize"
            >
              {name}
            </label>
          </div>
        ))}
      </div>
      {/* Offers */}
      <div className="py-4">
        <h1 className="font-merriweatherSans text-xl text-black/45  mb-1">
          Offers
        </h1>
        {/* Offer filter mapping */}
        {Offer.map(({ name, id, value }) => (
          <div className="flex items-center justify-start gap-2" key={name}>
            <div className="grid place-items-center">
              <input
                type="checkbox"
                id={id}
                checked={selectedOffer === value}
                onChange={() =>
                  setFilterData(() => ({ ...filterData, selectedOffer: value }))
                }
                className=" relative peer shrink-0
                 appearance-none w-5 h-5 border-2 border-pink-500 rounded-sm bg-white mt-1 checked:bg-pink-600 checked:border-0"
              />
              <svg
                className="
                 absolute w-3 h-3 mt-1 hidden peer-checked:block pointer-events-none text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <label htmlFor={id} className="text-nowrap text-lg font-Arimo">
              {name}
            </label>
          </div>
        ))}
      </div>
      {/* Cuisines */}
      <div className="">
        <h1 className="font-merriweatherSans text-xl text-black/45  mb-1">
          Cuisines
        </h1>
        {Cuisines.slice(0, showMore ? undefined : 10).map(({ name }) => (
          <div className="flex items-center justify-start gap-2 " key={name}>
            <div className="grid place-items-center">
              <input
                type="checkbox"
                id={name}
                checked={selectedCuisines === name}
                onChange={() =>
                  setFilterData((prev) => ({
                    ...prev,
                    selectedCuisines: [
                      ...filterData.selectedCuisines.filter(
                        (cuisine) => cuisine != name
                      ),
                      name,
                    ],
                  }))
                }
                className=" relative peer shrink-0
              appearance-none w-5 h-5 border-2 border-pink-500 rounded-sm bg-white mt-1 checked:bg-pink-600 checked:border-0"
              />
              <svg
                className="
              absolute w-3 h-3 mt-1 hidden peer-checked:block pointer-events-none text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
            </div>
            <label htmlFor={name} className="text-nowrap text-lg font-Arimo">
              {name}
            </label>
          </div>
        ))}
        {showMore ? (
          <button
            onClick={() => setShowMore(false)}
            className="py-2  text-pink-500 rounded flex items-center justify-center "
          >
            Show Less <IoIosArrowUp className="ml-1" />
          </button>
        ) : (
          <button
            onClick={() => setShowMore(true)}
            className=" py-2  text-pink-500 rounded flex items-center justify-center text-nowrap "
          >
            Show More <IoIosArrowUp className="ml-1 rotate-180" />
          </button>
        )}
      </div>
    </aside>
  );
};

export default Filter;
