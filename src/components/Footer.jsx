import React from "react";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="max-w-screen-2xl mx-auto text-gray-300 py-16 px-4 grid lg:grid-cols-3 gap-8">
      <div>
        <h1 className="w-full my-4 md:text-3xl text-xl font-bold text-[#00df9a]">
          diego-rg
        </h1>
        <p className="py-4">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Consequuntur, eius qui? Velit, ex. Consequuntur, ipsa nostrum? Atque
          nulla sapiente assumenda.
        </p>
        <div className="flex just my-6 mx-auto justify-between">
          <FaFacebookSquare size={30} />
          <FaInstagram size={30} />
          <FaTwitterSquare size={30} />
          <FaGithubSquare size={30} />
          <FaDribbbleSquare size={30} />
        </div>
      </div>
      <div className="lg:col-span-2 flex justify-around my-4">
        <div>
          <h2 className="font-medium text-gray- py-2">Solutions</h2>
          <ul>
            <li className="py-2 text-sm">Websites</li>
            <li className="py-2 text-sm">Web Apps</li>
            <li className="py-2 text-sm">Web APIs</li>
            <li className="py-2 text-sm">SEO</li>
            <li className="py-2 text-sm">Design</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-gray- py-2">Support</h2>
          <ul>
            <li className="py-2 text-sm">Services</li>
            <li className="py-2 text-sm">Pricing</li>
            <li className="py-2 text-sm">Contact</li>
            <li className="py-2 text-sm">FAQ</li>
          </ul>
        </div>
        <div>
          <h2 className="font-medium text-gray- py-2">Legal</h2>
          <ul>
            <li className="py-2 text-sm">Claim</li>
            <li className="py-2 text-sm">Policy</li>
            <li className="py-2 text-sm">Terms</li>
            <li className="py-2 text-sm">Cookies</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
