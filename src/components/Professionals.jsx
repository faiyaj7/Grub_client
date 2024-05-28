import React from "react";

const Professionals = () => {
  return (
    <section>
      {/* Top part */}
      <div className="flex items-center justify-around ">
        {/* Left part */}
        <div className="">
          <h4>Our Professionals</h4>
          <h1>Meet our stuff</h1>
        </div>
        {/* Right part */}
        <div className="">
            <button className="py-2 px-5 bg-orange-500 font-Arimo font-medium text-white">View All Staff</button>
        </div>
      </div>
      {/* Bottom part */}
      <div className=""></div>
    </section>
  );
};

export default Professionals;
