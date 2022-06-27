import React from "react";

import technologies from "../assets/technologies.svg";

const Technologies = () => {
  return (
    <section className="width-full bg-white py-16 px-4">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-2">
        <img
          className="w-[200px] md:mx-0 mx-auto md:mb-auto mb-16 md:my4"
          src={technologies}
          alt="Logos of several web frameworks and libraries."
        />
        <div className="flex flex-col justify-center md:text-left text-center">
          <h1 className="text-[#00df9a] font-bold py-2 text-xl md:text-2xl">
            Built with the latest technologies.
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus minima, perspiciatis dolorem dignissimos fugiat illo
            tenetur fuga at in temporibus ut officiis expedita ipsa et magni
            impedit, dicta nisi.
          </p>
          <div className="flex">
            <button className="px-4 py-2 mx-auto md:mx-0 rounded-md font-medium my-6 text-white bg-black hover:bg-gray-800">
              More info
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Technologies;
