import React from "react";

const Contact = () => {
  return (
    <div className="width-full bg-[#000300] text-white py-16 px-4">
      <div className="max-w-screen-xl mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 flex flex-col justify-center">
          <h1 className="font-bold py-2 text-xl md:text-2xl">
            Contact us for more information or order a project.
          </h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Distinctio
            voluptatibus veniam debitis ducimus.
          </p>
        </div>
        <div className="my-4">
          <div className="flex flex-row items-center justify-between w-full">
            <input
              className="p-2 rounded-md text-black w-full"
              type="email"
              placeholder="Contact email"
            />
            <button className="px-4 py-2 rounded-md font-medium m-2 bg-[#00df9a] text-black">
              Contact
            </button>
          </div>
          <p>
            Please, read our{" "}
            <span className="text-[#00df9a]">Privacy Policy.</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
