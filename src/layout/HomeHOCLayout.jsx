import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeHOCLayout = () => (WrappedComponent) => {
  return (props) => (
    <div className=" ">
      <Header />
      <WrappedComponent />
      <Footer />
    </div>
  );
};

export default HomeHOCLayout;
