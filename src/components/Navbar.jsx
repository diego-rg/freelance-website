import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <nav className="flex justify-between items-center md:h-24 h-16 max-w-screen-xl mx-auto px-4 text-white">
      <h1 className="w-full md:text-3xl text-xl font-bold text-[#00df9a]">
        diego-rg
      </h1>
      <ul className="hidden md:flex">
        <li className="p-4 text-lg">Home</li>
        <li className="p-4 text-lg">Technologies</li>
        <li className="p-4 text-lg">Services</li>
        <li className="p-4 text-lg">About</li>
        <li className="p-4 text-lg">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full bg-[#000300] border-r border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full m-4 md:text-3xl text-xl font-bold text-[#00df9a]">
          diego-rg
        </h1>
        <ul className="uppercase p-4">
          <li className="p-4 border-b border-b-gray-400">Home</li>
          <li className="p-4 border-b border-b-gray-400">Technologies</li>
          <li className="p-4 border-b border-b-gray-400">Services</li>
          <li className="p-4 border-b border-b-gray-400">About</li>
          <li className="p-4 border-b border-b-gray-400">Contact</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
