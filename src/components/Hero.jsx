import React from "react";
import Typed from "react-typed";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="flex flex-col max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center justify-center">
        <p className="text-[#00df9a] text-lg uppercase font-bold p-2">
          Freelance Web Developer
        </p>
        <h1 className="md:text-6xl sm:text-5xl text-4xl font-bold md:py-6">
          diego-rg
        </h1>
        <div className="flex justify-center items-center">
          <p className="md:text-3xl sm:text-2xl text-xl font-bold py-2">
            Developing the highest quality
          </p>
          <Typed
            className="md:text-3xl sm:text-2xl text-xl font-bold pl-2 text-gray-500"
            strings={["Web APPs", "Websites", "Web APIs"]}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>
        <button className="">Order Now</button>
      </div>
    </div>
  );
};

export default Hero;
