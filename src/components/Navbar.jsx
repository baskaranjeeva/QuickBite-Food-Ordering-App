import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useSelector, useDispatch } from "react-redux";
import { setShowLogin } from "../slices/foodSlice";
function Navbar() {
  const [menu, setMenu] = useState("home");
  const [dotVal, setDotVal] = useState("");
  const { total } = useSelector((state) => state.food);

  const dispatch = useDispatch();
  function displayLogin(disp) {
    dispatch(setShowLogin(disp));
  }
  const currentMenu = (name) => {
    return name === menu ? "active" : "";
  };
  useEffect(() => {
    if (total === 0) {
      setDotVal("");
    } else {
      setDotVal("dot");
    }
  }, [total]);
  return (
    <div>
      <div className="flex justify-between items-center mt-10">
        <div>
          <Link to="/">
            <img src={assets.logo} className="w-40" alt="" />
          </Link>
        </div>
        <div>
          <ul className="flex gap-10 text-[#49557e] text-lg cursor-pointer sm:gap-6 sm:text-md md:gap-4 md:text-sm lg:gap-8 lg:text-base">
            <Link
              to="/"
              className={currentMenu("home")}
              onClick={() => setMenu("home")}
            >
              home
            </Link>
            <a
              href="#explore-menu"
              className={currentMenu("menu")}
              onClick={() => setMenu("menu")}
            >
              menu
            </a>
            <a
              href="#app-download"
              className={currentMenu("mobile-app")}
              onClick={() => setMenu("mobile-app")}
            >
              mobile-app
            </a>
            <a
              href="#footer"
              className={currentMenu("contact us")}
              onClick={() => setMenu("contact us")}
            >
              contact us
            </a>
          </ul>
        </div>
        <div className="flex gap-10 items-center">
          <img src={assets.search_icon} alt="" />
          <div className="navbar-basket-icon">
            <Link to="/cart">
              <img src={assets.basket_icon} alt="" />
            </Link>
            <div className={dotVal}></div>
          </div>
          <button
            onClick={() => displayLogin(true)}
            className="bg-transparent hover:bg-[#fff4f2] 
  text-xl sm:text-lg md:text-base 
  text-[#49557e] 
  rounded-4xl sm:rounded-2xl md:rounded-lg 
  border border-red-500 
  px-8 sm:px-6 md:px-4 
  py-1 sm:py-2 md:py-1 
  transition duration-300 
  cursor-pointer"
          >
            sign in
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
