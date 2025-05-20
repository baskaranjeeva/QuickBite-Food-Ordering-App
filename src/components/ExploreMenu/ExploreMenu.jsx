import React from "react";
import { menu_list } from "../../assets/assets";
import "./ExploreMenu.css";

function ExploreMenu({ category, setCategory }) {
  return (
    <div className="flex flex-col gap-[20px]">
      <h1 className="text-4xl font-medium text-[#262626]">Explore our menu</h1>
      <p className="max-w-[60%] text-[#808080] ">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="flex justify-between items-center gap-[30px] text-center mx-[20px] my-[0px] overflow-x-scroll">
        {menu_list.map((item, index) => {
          return (
            <div
              onClick={() =>
                setCategory((prev) =>
                  prev === item.menu_name ? "All" : item.menu_name
                )
              }
              key={index}
            >
              <img
                src={item.menu_image}
                className={`w-[7.5vw] min-w-[80px] cursor-pointer rounded-[50%] transition-[0.2s] ${
                  category === item.menu_name ? "activeMenu" : ""
                }`}
                alt=""
              />
              <p className="mt-[10px] text-[#747474] text-[max(1.4vw, 16px)] cursor-pointer">
                {item.menu_name}
              </p>
            </div>
          );
        })}
      </div>
      <hr className="mx-[10px] my-[0px] h-[2px] bg-[#e2e2e2] border-none" />
    </div>
  );
}

export default ExploreMenu;
