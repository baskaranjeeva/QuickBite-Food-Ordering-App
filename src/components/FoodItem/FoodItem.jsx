import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import { useSelector, useDispatch } from "react-redux";
// http://localhost:5173/
import {
  addToCart,
  removeFromCart,
  getTotalCartAmount,
  setCategory,
} from "../../slices/foodSlice";
function FoodItem({ item }) {
  // const [itemCount, setItemCount] = useState(0);
  const allItems = useSelector((state) => state.food.cartItems);
  const dispatch = useDispatch();
  // console.log(allItems);
  // console.log(item._id);
  function addItem(id) {
    dispatch(addToCart(id));
    dispatch(getTotalCartAmount());
  }
  const removeItem = (id) => {
    dispatch(removeFromCart(id));
    dispatch(getTotalCartAmount());
  };

  return (
    <div className=" bg-yellow-200 w-full m-auto rounded-2xl shadow-[0px_0px_10px_#00000015] transition-[0.3s] animate-fade-in-scale-[1s]">
      <div className="relative ">
        <img
          className="w-full rounded-[15px_15px_0_0]"
          src={item.image}
          alt=""
        />

        {!allItems[item._id] ? (
          <img
            className="absolute w-[35px] bottom-[15px] right-[15px] cursor-pointer rounded-[50%]  "
            onClick={() => addItem(item._id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute bottom-[15px] right-[15px] flex items-center gap-2 p-1 rounded-[50px] bg-white font-semibold">
            <img
              className="w-[30px]"
              onClick={() => removeItem(item._id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{allItems[item._id]}</p>
            <img
              className="w-[30px]"
              onClick={() => addItem(item._id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>
      <div className="p-2">
        <div className="flex justify-between items-center mb-2">
          <p className="text-xl font-semibold">{item.name}</p>
          <img className="w-[70px]" src={assets.rating_starts} alt="" />
        </div>
        <p className="text-[#676767] text-sm">{item.description}</p>
        <p className="text-2xl font-semibold text-[tomato] my-[10px]">
          ${item.price}
        </p>
      </div>
    </div>
  );
}

export default FoodItem;
