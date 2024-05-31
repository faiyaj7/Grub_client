import React from "react";
import Title from "../components/helmetHook";
import HeroBanner from "../components/HeroBanner";
import HomeHOCLayout from "../layout/HomeHOCLayout";
import PopularMenu from "../components/PopularMenu";
import SpecialOffer from "../components/SpecialOffer";
import SpecialPromo from "../components/SpecialPromo";
import Professionals from "../components/Professionals";
import Article from "../components/Article";
import Sponsors from "../components/Sponsors";
import CustomerFeedback from "../components/CustomerFeedback";
import MobileDownload from "../components/MobileDownload";
import AboutUs from "../components/AboutUs";
import SuccessStories from "../components/SuccessStories";
const Home = () => {
  return (
    <>
      <Title title="Grub" />
      <HeroBanner />
      <PopularMenu />
      <AboutUs />
      <SpecialOffer />
      <SpecialPromo />
      {/* <SuccessStories /> */}
      <MobileDownload />
      <Professionals />
      <CustomerFeedback />
      <Article />
      <Sponsors />
    </>
  );
};

export default HomeHOCLayout()(Home);
