import React, { useState } from "react";
import { assets } from "../assets/assets";
import { useSelector, useDispatch } from "react-redux";
import { setShowLogin } from "../slices/foodSlice";

function LoginPopup() {
  const [currState, setCurrState] = useState("Login");
  const dispatch = useDispatch();
  function dispLog(disp) {
    dispatch(setShowLogin(disp));
  }
  return (
    <div className="absolute z-10 w-full h-full bg-[#00000090] grid">
      <form
        className="place-self-center w-[max(23vw_330px)] text-[#808080] bg-white flex flex-col gap-[25px]
      py-[30px] px-[25px] rounded-[8px] text-[14px] animate-fade-in-scale
      "
      >
        <div className="flex justify-between items-center text-black text-2xl font-bold">
          <h2>{currState}</h2>
          <img
            className="w-[16px] cursor-pointer"
            onClick={() => dispLog(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>
        <div className="flex flex-col gap-[20px]">
          {currState === "Login" ? (
            <></>
          ) : (
            <input
              className="outline-none p-2 rounded-md border-1 border-solid border-[#c9c9c9]"
              type="text"
              placeholder="Your name"
              required
            />
          )}

          <input
            className="outline-none p-2 rounded-md border-1 border-solid border-[#c9c9c9]"
            type="email"
            placeholder="Your email"
            required
          />
          <input
            className="outline-none p-2 rounded-md border-1 border-solid border-[#c9c9c9]"
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button className="border-none p-[10px] rounded-md text-white bg-[tomato] text-[15px] cursor-pointer ">
          {currState === "Sign Up" ? "Create account" : "Login"}
        </button>
        <div className="flex items-center gap-[8px] mt-[-15px]">
          <input type="checkbox" required />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        {currState === "Login" ? (
          <p>
            Create a new Account?
            <span
              className="text-[tomato] font-semibold cursor-pointer"
              onClick={() => setCurrState("Sign Up")}
            >
              {" "}
              Click here
            </span>
          </p>
        ) : (
          <p>
            Already have an Account?
            <span
              className="text-[tomato] font-semibold cursor-pointer"
              onClick={() => setCurrState("Login")}
            >
              {" "}
              Login here
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
