import React from "react";
import GridLoader from "react-spinners/GridLoader";
// fixed top-[50%] -translate-x-[50%] left-[50%] -translate-y-[50%]
const Loader = () => {
  return (
    <div className="fixed top-0  left-0 right-0 bottom-0 flex items-center justify-center h-screen bg-pink-700 ">
      <GridLoader size={40} margin={10} speedMultiplier={2} />
    </div>
  );
};

export default Loader;
