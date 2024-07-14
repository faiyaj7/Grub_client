import React, { useState } from "react";
import { step } from "../constants/Cart";
import { FaCheck, FaChevronLeft } from "react-icons/fa";
import { IoMdArrowRoundBack } from "react-icons/io";
import { motion } from "framer-motion";
import CartMenu from "../components/CartMenu";
import HomeHOCLayout from "../layout/HomeHOCLayout";
import OrderSummary from "../components/OrderSummary";
import { useSelector, useDispatch } from "react-redux";
import Payment from "../components/Payment";
import Address from "../components/Address";
import { toggleCurrentStep } from "../store/cartSlice";
import Success from "../components/Success";
import { FaDotCircle } from "react-icons/fa";
const Cart = () => {
  const dispatch = useDispatch();
  const currentStep = useSelector((state) => state.cartSlice.currentStep);
  const totalPrice = useSelector((state) => state.productSlice.totalPrice);
  const cart = useSelector((state) => state.productSlice.cart);
  console.log(currentStep);
  return (
    <>
      {/* Progrssive Bar */}
      <div className="flex items-center justify-center mt-8 lg:mt-0">
        {step.map((item, index) => (
          <motion.div className="step-item" key={item.id}>
            <motion.div
              className="step"
              initial={{
                backgroundColor: index < currentStep ? "#D6A2E8" : "#1e293b",
                border: index < currentStep ? "0px solid text-pink-500" : 0,
              }}
              animate={{
                backgroundColor: index < currentStep ? "#D6A2E8" : "#1e293b",
                border: index < currentStep ? "0px solid text-pink-500" : 0,
              }}
            >
              {index >= currentStep ? (
                <FaDotCircle />
              ) : (
                <FaCheck className="" />
              )}
            </motion.div>
            <h1 className="capitalize">{item.value}</h1>
            {/* straight line between 2 steps */}
            {index < step.length - 1 && (
              <motion.div
                className="absolute w-full h-1 left-2/4 top-1/3 -translate-y-2/4 bg-[#82589F]"
                initial={{ width: 0 }}
                animate={{ width: index < currentStep ? "100%" : "0%" }}
                transition={{ duration: 0.5 }}
              />
            )}
          </motion.div>
        ))}
      </div>
      {/* Back Arrow */}
      <IoMdArrowRoundBack
        className="rounded-full w-6 h-6 p-1 bg-slate-700 text-white hover:bg-slate-900 transition-all duration-300 ml-5 my-8 lg:my-0"
        onClick={() => dispatch(toggleCurrentStep({ id: "dec" }))}
      />
      {/* Cart */}
      <div
        className={` ${
          currentStep >= 3 || cart.length === 0
            ? ""
            : "flex items-center lg:items-start justify-between gap-5 flex-col lg:flex-row px-10"
        }`}
      >
        {/* Cart Menu */}
        <div className="">
          {currentStep === 0 && <CartMenu cart={cart} />}
          {currentStep === 1 && <Address cart={cart} />}
          {currentStep === 2 && <Payment cart={cart} />}
          {currentStep >= 3 && <Success />}
        </div>
        {/* Order Summary */}
        {currentStep < 3 && (
          <div className="">
            <OrderSummary
              cart={cart}
              totalPrice={totalPrice}
              currentStep={currentStep}
              isPayment={currentStep === 2 && true}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default HomeHOCLayout()(Cart);
