import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1024px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">diego-rg</h1>
      <ul className="hidden : md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Technologies</li>
        <li className="p-4">Services</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[70%] h-full bg-[#000300] border-r border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full m-4 text-3xl font-bold text-[#00df9a]">
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
    </div>
  );
};

export default Navbar;
