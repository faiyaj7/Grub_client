import React, { useState } from "react";
import { Menu } from "../constants/MenuList";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
import Drawer from "./Drawer";
import { AnimatePresence } from "framer-motion";
import Logo from "./Logo";
import { useSelector } from "react-redux";
const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const qty = useSelector((state) => state.productSlice.totalQuantities);
  // Handling the menu open and close
  const handleToggleMenu = () => {
    if (menuOpen) {
      setMenuOpen(false);
      // making the scroll on when menu is closed
      document.querySelector("html").style.overflow = "visible";
    } else {
      setMenuOpen(true);
      // making the scroll off when menu is opened
      document.querySelector("html").style.overflow = "hidden";
    }
  };
  return (
    <>
      {" "}
      <div className="w-full flex items-center justify-around mt-5 lg:mt-0">
        {/* Logo */}
        <div className="w-[25%] lg:w-[15%]">
          <Logo />
        </div>
        {/* Lists */}
        <div className="hidden lg:flex lg:items-center gap-8">
          {Menu.map(({ id, name, link }) => (
            <Link
              to={link}
              key={id}
              className="font-fraunces text-sm hover:border-b hover:border-b-black transition-all duration-300"
            >
              {name}
            </Link>
          ))}
        </div>
        {/* SearchBar */}
        <div className="relative hidden lg:flex items-center justify-center flex-grow flex-shrink-0 min-w-[150px] max-w-[350px]">
          <input
            type="text"
            placeholder="Search Keywords"
            className="shadow-lg bg-white placeholder:text-black/20 py-2 px-5 rounded-lg flex-1 outline-none  font-merriweatherSans"
          />
          <IoMdSearch
            size={20}
            className="absolute right-2 cursor-pointer text-black/45"
          />
        </div>

        <div className="flex items-center justify-center gap-8 ">
          {/* Cart */}
          <Link
            to="/cart"
            className="relative flex items-center justify-center cursor-pointer"
          >
            <IoCartOutline className="w-8 h-8 rounded-full bg-slate-200 p-2 hover:bg-slate-300 transition-all duration-300" />
            <span className="text-xs absolute -right-4 -top-2 h-6 w-6 rounded-full bg-red-400  text-center p-[0.2rem] font-fraunces text-white">
              {qty}
            </span>
          </Link>
          {/* Login */}
          <div className="cursor-pointer">
            <MdLogin className="w-8 h-8 rounded-full bg-slate-200 p-2 hover:bg-slate-300 transition-all duration-300" />
          </div>

          {/* Menu button */}
          <button
            onClick={handleToggleMenu}
            className=" lg:hidden flex items-center justify-center flex-col gap-1 z-30"
          >
            <span
              className={`bg-black dark:bg-light  block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                menuOpen
                  ? `rotate-45 translate-y-[0.70rem]`
                  : `-translate-y-0.5`
              } `}
            ></span>
            <span
              className={` my-0.5 bg-black dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                menuOpen ? `opacity-0` : `opacity-100`
              } `}
            ></span>
            <span
              className={`bg-black dark:bg-light block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                menuOpen ? `-rotate-45 -translate-y-1` : `translate-y-0.5`
              } `}
            ></span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <Drawer open={menuOpen} handleToggleMenu={handleToggleMenu} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
