import React from "react";

import website from "../assets/website.svg";
import api from "../assets/api.svg";
import app from "../assets/app.svg";

const Services = () => {
  return (
    <section className="width-full bg-white py-16 px-4">
      <div className="max-w-screen-lg mx-auto grid md:grid-cols-3 gap-8">
        <div className="w-full border shadow-lg rounded-lg p-8 hover:scale-105 text-center">
          <img
            className="w-32 m-auto"
            src={website}
            alt="Three persons weorking in a web project."
          />
          <h2 className="text-xl font-bold py-8">Website</h2>
          <p className="text-center text-2xl font-semibold">300€</p>
          <div className="py-6">
            <ul>
              <li className="py-1 border-b-2">Fully customized</li>
              <li className="py-1 border-b-2">User friendly for all devices</li>
              <li className="py-1 border-b-2">Accesible for all users</li>
              <li className="py-1 border-b-2">Modern designs</li>
            </ul>
          </div>
          <div className="flex">
            <button className="px-4 py-2 rounded-md m-auto font-medium bg-[#00df9a] hover:bg-[#06ffb5] text-black">
              Order now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
