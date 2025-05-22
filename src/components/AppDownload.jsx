import React from "react";
import { assets } from "../assets/assets";

function AppDownload() {
  return (
    <>
      <div
        className="m-auto mt-[100px] text-4xl text-[max(3vw_20px)] text-center font-bold"
        id="app-download"
      >
        <p className="text-4xl">
          For Better Experience Download <br />
          Quickbite App
        </p>
        <div className="flex justify-center gap-3 gap-[max(2vw, 10px)] mt-[40px]">
          <img
            className="w-[max(30vw, 120px)] max-w-[180px] cursor-pointer transition-0.5"
            src={assets.play_store}
            alt=""
          />
          <img
            className="w-[max(30vw, 120px)] max-w-[180px] cursor-pointer transition-0.5"
            src={assets.app_store}
            alt=""
          />
        </div>
      </div>
    </>
  );
}

export default AppDownload;
