import React from "react";
import { Link } from "react-router-dom";
import Grub from "../assets/grub_logo.png";
const Logo = () => {
  return (
    <Link to="/">
      <img src={Grub} className="w-full" />
    </Link>
  );
};

export default Logo;
