import React from "react";
import Title from "../components/helmetHook";
import HeroBanner from "../components/HeroBanner";
import HomeHOCLayout from "../layout/HomeHOCLayout";
import PopularMenu from "../components/PopularMenu";
import SpecialOffer from "../components/SpecialOffer";
import SpecialPromo from "../components/SpecialPromo";
import Professionals from "../components/Professionals";
const Home = () => {
  return (
    <>
      <Title title="Food App" />
      <HeroBanner />
      <PopularMenu />
      <SpecialOffer />
      <SpecialPromo />
      <Professionals />
    </>
  );
};

export default HomeHOCLayout()(Home);
