import React from "react";
import { useSelector } from "react-redux";
import FoodItem from "../FoodItem/FoodItem";

function FoodDisplay() {
  const { food_list, category } = useSelector((state) => state.food);

  return (
    <div className="mt-[30px]">
      <h2 className="text-[max(2vw,24px)] font-extrabold ">Top Dishes</h2>
      <div className="grid grid-cols-[repeat(auto-fill,_minmax(240px,_1fr))] gap-4 gap-y-6 mt-3">
        {food_list.map((item, index) => {
          if (category === "All" || category === item.category) {
            return <FoodItem key={index} item={item} />;
          }
        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
