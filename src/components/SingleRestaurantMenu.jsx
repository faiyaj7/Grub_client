import React, { useEffect, useState } from "react";
import topRestaurant from "../assets/top_restaurant.svg";
import HomeHOCLayout from "../layout/HomeHOCLayout";
import Breadcrumb from "./Breadcrumb";
import { useParams } from "react-router-dom";
import urlFor from "../lib/imageBuilder";
import client from "../lib/client";
import { LuDot, LuBike } from "react-icons/lu";
import { FiShoppingBag } from "react-icons/fi";
import {
  FaStar,
  FaExclamationCircle,
  FaPlusCircle,
  FaCircle,
} from "react-icons/fa";
import { PiNotepadThin } from "react-icons/pi";
import Modal from "./Modal";
import { AnimatePresence, motion } from "framer-motion";
const fetchSingleRestaurantInformation = async (id) => {
  const query = `*[_type == 'restaurant' && "${id}" == slug.current][0]{...,"imageUrl":image.asset->url}`;
  // console.log(query);
  const result = await client.fetch(query);
  return result;
};
const fetchSingleRestaurantMenu = async (id) => {
  const query = `*[_type == "restaurant" && "${id}" == slug.current][0]{menu[]->{...,"imageUrl":image.asset ->url}}`;
  // console.log(query);
  const result = await client.fetch(query);
  return result.menu;
};
const fetchSingleRestaurantCuisines = async (id) => {
  const query = `*[_type == "restaurant" && "${id}" == slug.current][0]{cuisines}`;
  // console.log(query);
  const result = await client.fetch(query);
  return result.menu;
};
const SingleRestaurantMenu = () => {
  const [singleRestaurant, setSingleRestaurant] = useState();
  const [singleRestaurantMenu, setSingleRestaurantMenu] = useState([]);
  const [singleRestaurantCuisines, setSingleRestaurantCuisines] = useState([]);
  const [showModal, setShowModal] = React.useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState(null);

  const [loading, setLoading] = useState(true);

  let { id } = useParams();

  if (showModal) {
    document.documentElement.style.overflow = "hidden";
  } else {
    document.documentElement.style.overflowY = "scroll";
  }
  useEffect(() => {
    const fetchData = async () => {
      // Fetch restaurant information
      const singleRestaurantData = await fetchSingleRestaurantInformation(id);
      setSingleRestaurant(singleRestaurantData);

      // Fetch menu
      const singleRestaurantMenuData = await fetchSingleRestaurantMenu(id);
      setSingleRestaurantMenu(singleRestaurantMenuData);

      // Set loading state to false once both pieces of data are fetched

      // Fetch Cuisines
      const singleRestaurantCuisines = await fetchSingleRestaurantCuisines(id);
      setSingleRestaurantCuisines(singleRestaurantMenuData);
      setLoading(false);
    };

    fetchData();
  }, []);

  if (loading) return <div>..Loading</div>;
  return (
    <div className="px-10">
      <Breadcrumb userId={id} />
      {/* Top Part (Restaurant intro) */}
      <div className="flex items-center justify-start flex-col lg:flex-row gap-10 pt-10">
        <img
          src={urlFor(singleRestaurant?.imageUrl).url()}
          className="w-full lg:w-[15%]"
        />

        <div className="flex items-start flex-col gap-2 pb-2">
          {/* Cuisines/Categories */}
          <div className="flex items-center justify-start">
            {singleRestaurant.cuisines.map((item, index) => (
              <React.Fragment key={item}>
                {index === singleRestaurant.cuisines.length - 1 ? (
                  <h1 className="font-merriweatherSans">{item}</h1>
                ) : (
                  <>
                    <span className="flex items-center font-merriweatherSans">
                      {" "}
                      {item} <LuDot />
                    </span>
                  </>
                )}
              </React.Fragment>
            ))}
          </div>
          {/* Name */}
          <h1 className="font-anton text-3xl tracking-wide">
            {singleRestaurant.restaurant_name}
          </h1>
          {/* Top Restuarant badge, free delivery */}
          <div className="flex items-center gap-2">
            {/* Top Restaurant Badge */}
            <div className="bg-pink-500 flex items-center gap-1 rounded-md px-2 py-1">
              {singleRestaurant.reviews > 10 && (
                <img
                  src={topRestaurant}
                  alt="Top Restaurant"
                  className="text-[#ec4899]"
                />
              )}
              <span className="text-white font-merriweatherSans font-medium text-xs">
                Top Restuarant
              </span>
            </div>
            {/* Free Delivery */}
            <div className="flex items-center">
              <div className=" flex items-center gap-1 rounded-md px-2 py-1 border border-black/65">
                <LuBike />
                <span className="text-black font-merriweatherSans font-medium text-xs">
                  Free Delivery
                </span>
              </div>
            </div>

            {/* Minimum Price Delivery */}
            <div className="flex items-center">
              <div className=" flex items-center gap-1 rounded-md px-2 py-1 border border-black/65">
                <FiShoppingBag />
                <span className="text-black font-merriweatherSans font-medium text-xs">
                  $5 Minimum
                </span>
              </div>
            </div>
          </div>
          {/* Ratings,Reviews,More Info */}
          <div className="flex items-center justify-start gap-3">
            {/* Rating and Review */}
            <div className="flex items-center justify-center gap-1">
              <FaStar className="text-[#ec4899]" />
              <div className="flex items-center">
                <h1 className="font-light font-merriweatherSans text-sm">
                  {singleRestaurant.rating}/5
                </h1>
                <h1 className="font-light font-merriweatherSans text-sm">
                  ({singleRestaurant.reviews}+)
                </h1>
              </div>
            </div>
            {/* Reviews */}
            <button className="text-pink-500 font-merriweatherSans text-nowrap">
              See Reviews
            </button>
            {/* More Info */}
            <button className="flex items-center gap-1 ml-4 ">
              <FaExclamationCircle className="text-pink-500" />{" "}
              <span className="text-pink-400 font-merriweatherSans text-nowrap ">
                More Info
              </span>
            </button>
          </div>
        </div>
      </div>
      <hr />
      {/* Available Offers */}
      <div className="flex items-start flex-col gap-1">
        <h1 className="font-merriweatherSans text-xl pt-4">Available Offers</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 mr-auto w-fit py-4">
          {/* Offer */}
          <div className="border border-black/25 rounded-xl px-6 py-4  hover:bg-pink-500/25 transition-all duration-300 cursor-pointer  shadow-md">
            <div className="flex items-center">
              <PiNotepadThin className="text-pink-500" />
              <h1 className="font-merriweatherSans">$5 off(GRUB5)</h1>
            </div>
            <p className="font-fraunces">
              Min. order $10. Valid for all items.
            </p>
            <p className="font-fraunces">Use in Cart.</p>
          </div>
          {/* Voucher deal */}
          <div className="border border-black/25 rounded-xl  px-6 py-4 hover:bg-pink-500/25 transition-all duration-300 cursor-pointer shadow-md">
            <div className="flex items-center">
              <PiNotepadThin className="text-pink-500" />
              <h1 className="font-merriweatherSans">
                ${singleRestaurant.voucher_offer.price} off(GRUB
                {Math.floor(singleRestaurant.voucher_offer.price)})
              </h1>
            </div>
            <p className="font-fraunces">
              Min. order ${Math.floor(singleRestaurant.voucher_offer.price)}.
              Valid for all items.
            </p>
            <p className="font-fraunces">Use in Cart.</p>
          </div>{" "}
          {/* Deal Offer */}
          <div className="border border-black/25 rounded-xl  px-6 py-4 hover:bg-pink-500/25 transition-all duration-300 cursor-pointer shadow-md">
            <div className="flex items-center">
              <PiNotepadThin className="text-pink-500" />
              <h1 className="font-merriweatherSans">
                ${singleRestaurant.deal_offer.price} off(GRUB
                {Math.floor(singleRestaurant.deal_offer.price)})
              </h1>
            </div>
            <p className="font-fraunces">
              Min. order ${Math.floor(singleRestaurant.deal_offer.price)}. Valid
              for all items.
            </p>
            <p className="font-fraunces">Use in Cart.</p>
          </div>
        </div>
      </div>
      {/* categories */}
      <div className="">
        <input type="text" name="" id="" />
        <div className=""></div>
      </div>
      {/* Menu */}
      <h1 className="font-merriweatherSans text-xl pt-4">🔥 Popular Menu</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 px-4 gap-10 mr-auto w-fit pt-4 pb-10">
        {singleRestaurantMenu?.map((item) => (
          <motion.div
            whileHover={{
              backgroundColor: "rgba(236 72 153 1)",
              color: "white",
            }}
            key={item._id}
            className="flex items-center justify-between border border-black/25 px-4 cursor-pointer rounded-xl shadow-md"
            onClick={() => {
              setSelectedMenuItem(item);
              setShowModal(true);
            }}
          >
            {/* Left Part (Info) */}
            <div className="w-[60%]">
              <h1 className="font-Arimo">{item.name}</h1>
              <h1 className="font-Arimo">${item.price}</h1>
              <p className="font-fraunces">{item.desc}</p>
            </div>
            {/* Food Image */}
            <div className="w-[40%]">
              <img src={urlFor(item?.imageUrl).url()} alt={item.name} />
            </div>
          </motion.div>
        ))}
        <AnimatePresence>
          {showModal && (
            <Modal
              showModal={showModal}
              setShowModal={setShowModal}
              singleRestaurantMenu={selectedMenuItem}
            />
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default HomeHOCLayout()(SingleRestaurantMenu);
