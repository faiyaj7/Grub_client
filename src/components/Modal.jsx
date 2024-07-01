import React from "react";
import { RxCross1 } from "react-icons/rx";
import urlFor from "../lib/imageBuilder";
import { FaMinus, FaPlus, FaCartShopping } from "react-icons/fa6";
export default function Modal({
  showModal,
  setShowModal,
  singleRestaurantMenu,
}) {
  return (
    <>
      <div className="fixed top-10 left-96 right-96 z-50 overflow-y-scroll">
        <div className="relative h-[80vh] ">
          {/*content*/}
          <div className="border-0 rounded-l-lg shadow-lg relative flex flex-col w-full bg-white  outline-none focus:outline-none">
            {/*image*/}
            <div className="relative px-6 flex-auto">
              <img
                src={urlFor(singleRestaurantMenu.image).url()}
                alt={singleRestaurantMenu.name}
                className="mx-auto"
              />
              <button
                className="absolute top-5 right-8 w-8 h-8 rounded-full bg-pink-500 text-white hover:scale-110 transition-all duration-500"
                onClick={() => setShowModal(false)}
              >
                <RxCross1 className="hover:rotate-180 transition-all duration-500 mx-auto " />
              </button>
            </div>
            {/* Menu Desc */}
            <div className="flex items-start px-10 flex-col w-full">
              <h3 className="text-3xl font-semibold font-merriweatherSans">
                {singleRestaurantMenu.name}
              </h3>
              <p className="my-4 text-lg leading-relaxed font-fraunces">
                {singleRestaurantMenu.desc}
              </p>
              <h1 className="font-fraunces text-red-500">
                ${singleRestaurantMenu.price}
              </h1>
              <h1 className="font-fraunces text-xl tracking-wide font-medium">
                Special Instructions
              </h1>
              <h6 className="font-fraunces text-sm text-black/65">
                Special Requests are subject to the restaurant's approval.Tell
                us here!
              </h6>
              <textarea
                name="postContent"
                rows={4}
                cols={50}
                className="border border-black/25 rounded-xl p-2 focus:outline-none resize-none font-Arimo"
              />
            </div>
            {/*footer*/}
            <div className="flex items-center justify-end">
              <div className="sticky flex items-center justify-end p-6 gap-2">
                <button
                  className="text-slate-500 rounded-full bg-slate-200"
                  type="button"
                >
                  <FaMinus size={20} />
                </button>
                <span>1</span>
                <button
                  className="text-pink-500 rounded-full border border-slate-400"
                  type="button"
                  onClick={() => setShowModal(false)}
                >
                  <FaPlus />
                </button>
              </div>
              <button className="bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-3 mr-3">
                <FaCartShopping />{" "}
                <span className="font-fraunces">Add to cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div className="fixed inset-0 z-40 bg-black/65"></div>
    </>
  );
}
