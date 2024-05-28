import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeHOCLayout = () => (WrappedComponent) => {
  return (props) => (
    <div className="relative ">
      <Header />
      <WrappedComponent />
      <Footer />
    </div>
  );
};

export default HomeHOCLayout;
