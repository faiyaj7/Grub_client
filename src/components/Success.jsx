import React, { useEffect } from "react";
import success from "../assets/success.png";
import { Link } from "react-router-dom";
const Success = () => {
  useEffect(() => {
    localStorage.removeItem("persist:grub_root");
  }, []);
  return (
    <section className="w-full h-[70vh] flex items-center justify-center flex-col">
      <div className="relative flex items-center justify-center w-full h-[80%]">
        <img
          src={success}
          alt="success"
          className="z-10 object-contain h-[60%]"
        />
        <h1 className="absolute top-[50%] -translate-y-[50%] left-[50%] -translate-x-[50%] text-6xl lg:text-9xl -z-10 text-nowrap tracking-widest font-bold font-merriweatherSans text-black/15 text-center">
          Thank You!
        </h1>
      </div>
      <h1 className="font-merriweatherSans text-xl text-black/75">
        Your Payment is Successful
      </h1>
      <p className="font-merriweatherSans text-xl text-black/25 px-4 text-center">
        Thank you for your payment. An automated payment receipt will be sent to
        your registered email.
      </p>
      <Link to="/" className="pb-5 text-red-600 underline underline-offset-2">
        Back to Home
      </Link>
    </section>
  );
};

export default Success;
