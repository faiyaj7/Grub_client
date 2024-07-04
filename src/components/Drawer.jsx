import React from "react";
import { motion } from "framer-motion";
import { IoMdContact, IoMdContacts } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FaHome, FaMicroblog, FaQuestion } from "react-icons/fa";
import { FcAbout } from "react-icons/fc";
import { CgMenuCheese } from "react-icons/cg";
import { Link } from "react-router-dom";
const NavLink = ({
  title,
  singleItem = "",
  link,
  handleToggleMenu = "",
  icon,
  className,
}) => {
  const MotionLink = motion(Link);

  const handleScroll = (event) => {
    // for mobile
    if (handleToggleMenu) handleToggleMenu();
    let target = event.target.getAttribute("href");
    // Removing the / before the link to make an id

    target = target.slice(1);
    document.getElementById(target).scrollIntoView({ behavior: "smooth" });
  };

  return (
    <MotionLink
      to={link}
      variants={singleItem}
      onClick={handleScroll}
      className="font-medium text-sm group relative linkBorder link"
    >
      <div className="flex items-center justify-evenly gap-4">
        {icon}
        <h1 className={`${className}`}>{title}</h1>
      </div>
    </MotionLink>
  );
};
const Drawer = ({ open, handleToggleMenu }) => {
  const container = {
    hidden: { opacity: 0, x: "100vw" },
    visible: {
      x: 0,
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
    exit: { x: "100vw" },
  };
  const singleItem = {
    hidden: { x: "-100vw", opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.3 } },
  };

  return (
    <div
      className="visible lg:hidden fixed top-0 right-0 left-0  z-20 min-h-screen
   backdrop-blur-xl overflow-hidden w-full"
    >
      <motion.ul
        className="h-screen flex items-center justify-center flex-col gap-8"
        variants={container}
        initial="hidden"
        animate="visible"
        exit="exit"
        transition={{ duration: 0.4, ease: "easeIn" }}
      >
        <NavLink
          title="Home"
          singleItem={singleItem}
          link="/"
          handleToggleMenu={handleToggleMenu}
          icon={<FaHome size={30} />}
          className={"text-2xl"}
        />
        <NavLink
          title="About"
          singleItem={singleItem}
          link="/about"
          handleToggleMenu={handleToggleMenu}
          icon={<FcAbout size={30} />}
          className={"text-2xl"}
        />
        <NavLink
          title="Contact"
          singleItem={singleItem}
          link="/contact"
          handleToggleMenu={handleToggleMenu}
          icon={<IoMdContacts size={30} />}
          className={"text-2xl"}
        />
        <NavLink
          title="Menu"
          singleItem={singleItem}
          link="/restaurants"
          handleToggleMenu={handleToggleMenu}
          icon={<CgMenuCheese size={30} />}
          className={"text-2xl"}
        />{" "}
        <NavLink
          title="Cart"
          singleItem={singleItem}
          link="/cart"
          handleToggleMenu={handleToggleMenu}
          icon={<IoCartOutline size={30} />}
          className={"text-2xl"}
        />
        <NavLink
          title="Faq"
          singleItem={singleItem}
          link="/faq"
          handleToggleMenu={handleToggleMenu}
          icon={<FaQuestion size={30} />}
          className={"text-2xl"}
        />{" "}
        <NavLink
          title="Blog"
          singleItem={singleItem}
          link="/blog"
          handleToggleMenu={handleToggleMenu}
          icon={<FaMicroblog size={30} />}
          className={"text-2xl"}
        />
      </motion.ul>
    </div>
  );
};

export default Drawer;
