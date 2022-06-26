import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-24 max-w-[1024px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-[#00df9a]">Developer</h1>
      <ul className="flex">
        <li className="p-4">Home</li>
        <li className="p-4">Technologies</li>
        <li className="p-4">Services</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div>
        <AiOutlineMenu size={20} />
      </div>
      <div className="fixed left-0 top-0 w-[40%] h-full bg-[#000300] border-r border-r-gray-900">
        <h1 className="w-full m-4 text-3xl font-bold text-[#00df9a]">
          Developer
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
