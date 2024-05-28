import React from "react";
import { Menu } from "../constants/MenuList";
import { Link } from "react-router-dom";
import { IoMdSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { MdLogin } from "react-icons/md";
const Header = () => {
  return (
    <div className="absolute w-full flex items-center justify-around mt-5">
      {/* Logo */}
      <div className="">logo</div>
      {/* Lists */}
      <div className="flex gap-8">
        {Menu.map(({ id, name }) => (
          <Link
            href={`/${name}`}
            key={id}
            className="font-fraunces text-sm hover:border-b hover:border-b-black transition-all duration-300"
          >
            {name}
          </Link>
        ))}
      </div>
      {/* SearchBar */}
      <div className="relative flex items-center justify-center flex-grow flex-shrink-0 min-w-[150px] max-w-[350px]">
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
        <div className="relative flex items-center justify-center cursor-pointer">
          <IoCartOutline className="w-8 h-8 rounded-full bg-slate-200 p-2 hover:bg-slate-300 transition-all duration-300" />
          <span className="text-xs absolute -right-4 -top-2 h-6 w-6 rounded-full bg-red-400  text-center p-[0.2rem] font-fraunces text-white">
            10
          </span>
        </div>
        {/* Login */}
        <div className="cursor-pointer">
          <MdLogin className="w-8 h-8 rounded-full bg-slate-200 p-2 hover:bg-slate-300 transition-all duration-300" />
        </div>
      </div>
    </div>
  );
};

export default Header;
