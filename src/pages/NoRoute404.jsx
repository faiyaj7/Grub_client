import React from "react";
import error from "../assets/404.png";
import HomeHOCLayout from "../layout/HomeHOCLayout";
const NoRoute404 = () => {
  return <img src={error} alt="404 Error" />;
};

export default HomeHOCLayout()(NoRoute404);
