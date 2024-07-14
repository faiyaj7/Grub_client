import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RxCross1 } from "react-icons/rx";
import urlFor from "../lib/imageBuilder";
import { FaMinus, FaPlus, FaCartShopping } from "react-icons/fa6";
import { motion } from "framer-motion";
import { addToCart, decQty, incQty } from "../store/productSlice";
export default function Modal({
  showModal,
  setShowModal,
  singleRestaurantMenu,
}) {
  const qty = useSelector((state) => state.productSlice.qty);
  const dispatch = useDispatch();
  const modalRef = useRef(null);
  console.log(modalRef);
  // When clicked outside modal it should exit the modal
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    };
    window.addEventListener("mousedown", handleClickOutside);
  }, [setShowModal]);
  return (
    <>
      {/* Main Content */}
      <motion.div
        ref={modalRef}
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
        }}
        exit={{ opacity: 0 }}
        className="fixed top-0 lg:top-10 left-0 lg:left-96 right-0 lg:right-96 z-50  h-[80vh] overflow-y-scroll"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          className="relative"
        >
          {/*content*/}
          <div className="border-0 rounded-l-lg shadow-lg relative flex flex-col w-full h-full bg-white  outline-none focus:outline-none">
            {/*image*/}
            <div className="relative flex-auto h-[50%]">
              <img
                src={urlFor(singleRestaurantMenu.image).url()}
                alt={singleRestaurantMenu.name}
                className="h-full mx-auto"
              />
              <button
                className="absolute top-5 right-8 w-8 h-8 rounded-full bg-pink-500 text-white hover:scale-110 transition-all duration-500"
                onClick={() => setShowModal(false)}
              >
                <RxCross1 className="hover:rotate-180 transition-all duration-500 mx-auto " />
              </button>
            </div>
            {/* Menu Desc */}
            <div className="flex items-start px-10 flex-col w-full overflow-x-hidden h-[30%]">
              <motion.h3
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ duration: 0.7 }}
                className="text-3xl font-semibold font-merriweatherSans pt-10"
              >
                {singleRestaurantMenu.name}
              </motion.h3>
              <motion.p
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="my-4 text-lg leading-relaxed font-fraunces"
              >
                {singleRestaurantMenu.desc}
              </motion.p>
              <motion.h1
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="font-fraunces text-red-500"
              >
                ${singleRestaurantMenu.price}
              </motion.h1>
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
            <div className="flex items-center justify-end h-[10%]">
              <div className="sticky flex items-center justify-end p-6 gap-2">
                <button
                  className="text-slate-500 rounded-full bg-slate-200"
                  type="button"
                  onClick={() => dispatch(decQty())}
                >
                  <FaMinus size={20} />
                </button>
                <span>{qty}</span>
                <button
                  className="text-pink-500 rounded-full border border-slate-400"
                  type="button"
                  onClick={() => dispatch(incQty())}
                >
                  <FaPlus />
                </button>
              </div>
              <button
                className={`${
                  qty > 0 ? "cursor-pointer" : "cursor-not-allowed"
                } bg-pink-500 text-white px-4 py-2 rounded-lg flex items-center gap-3 mr-3 `}
                onClick={() => {
                  if (qty > 0) {
                    dispatch(addToCart({ product: singleRestaurantMenu, qty }));
                  }
                }}
              >
                <FaCartShopping />{" "}
                <span className="font-fraunces">Add to cart</span>
              </button>
            </div>
          </div>
        </motion.div>
      </motion.div>
      {/* Overlay */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-40 bg-black/65"
      ></motion.div>
    </>
  );
}
