import React from "react";
import { assets } from "../../assets/assets";
function Footer() {
  return (
    <div className="text-[#d9d9d9] bg-[#323232] flex flex-col items-center mt-5 gap-[20px] py-[20px] px-[8vw] pt-[80px]">
      <div className="w-full grid grid-cols-[2fr_1fr_1fr] gap-[80px]">
        <div className="flex flex-col items-start gap-[20px] list-none mb-1">
          <img src={assets.logo} alt="" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate
            odit nihil illo ipsa? Rerum dolorem sed totam optio quas? Hic earum
            voluptates ex sed natus. Omnis, nisi. Voluptatibus, magnam
            repellendus.
          </p>
          <div className="w-[40px] mr-2 gap-4 flex">
            <img src={assets.facebook_icon} alt="" />
            <img src={assets.twitter_icon} alt="" />
            <img src={assets.linkedin_icon} alt="" />
          </div>
        </div>
        <div className="flex flex-col items-start gap-[20px] list-none mb-1 text-white">
          <h2 className="text-xl font-semibold">COMPANY</h2>
          <ul>
            <li className="cursor-pointer">Home</li>
            <li className="cursor-pointer">About us</li>
            <li className="cursor-pointer">Delivery</li>
            <li className="cursor-pointer">Privacy policy</li>
          </ul>
        </div>
        <div className="flex flex-col items-start gap-[20px] list-none mb-1 text-white">
          <h2 className="text-xl font-semibold">GET IN TOUCH</h2>
          <ul>
            <li>+1-212-456-7890</li>
            <li>contact@quickbite.com</li>
          </ul>
        </div>
      </div>
      <hr className="w-full h-[2px] my-[20px] mx-[0px] bg-gray-500 border-none" />
      <p className="mb-2">
        Copyright 2025 © quickbite.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
