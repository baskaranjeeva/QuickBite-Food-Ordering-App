import React, { useState } from "react";
import { assets } from "../assets/assets";
import "./Navbar.css";

function Navbar() {
  const [menu, setMenu] = useState("home");
  const currentMenu = (name) => {
    return name === menu ? "active" : "";
  };
  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <img src={assets.logo} className="w-40" alt="" />
        </div>
        <div>
          <ul className="flex gap-10 text-[#49557e] text-lg cursor-pointer">
            <li className={currentMenu("home")} onClick={() => setMenu("home")}>
              home
            </li>
            <li className={currentMenu("menu")} onClick={() => setMenu("menu")}>
              menu
            </li>
            <li
              className={currentMenu("mobile-app")}
              onClick={() => setMenu("mobile-app")}
            >
              mobile-app
            </li>
            <li
              className={currentMenu("contact us")}
              onClick={() => setMenu("contact us")}
            >
              contact us
            </li>
          </ul>
        </div>
        <div className="flex gap-10 items-center">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-basket-icon">
            <img src={assets.basket_icon} alt="" />
            <div className="dot"></div>
          </div>
          <button className="bg-transparent hover:bg-[#fff4f2]  text-xl text-[#49557e] rounded-4xl border border-red-500 px-8 py-1  transition duration-300 cursor-pointer">
            sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
