import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, getTotalCartAmount } from "../../slices/foodSlice";
import "./Cart.css";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cartItems, food_list, total } = useSelector((state) => state.food);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  function removeItem(id) {
    dispatch(removeFromCart(id));
  }
  useEffect(() => {
    dispatch(getTotalCartAmount());
  }, [cartItems, dispatch]);
  return (
    <div className="mt-[100px]">
      <div>
        <div
          className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] 
        items-center text-md font-semibold text-black font-[max(1vw_12px)]"
        >
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p className="text-center">Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div
                  className="grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] 
                items-center text-gray-500 font-[max(1vw_12px)] my-[10px] mx-[0px] "
                  key={index}
                >
                  <img className="w-12" src={item.image} alt="" />
                  <p>{item.name}</p>
                  <p>${item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <p
                    className="cursor-pointer text-center"
                    onClick={() => removeItem(item._id)}
                  >
                    🗑
                  </p>
                </div>
                <hr className="h-[1px] bg-[#e2e2e2] border-none" />
              </div>
            );
          }
        })}
      </div>
      <div
        className="mt-[80px] mb-[80px] flex justify-between gap-[max(12vw_20px)]"
        id="cart-bottom"
      >
        <div className="flex flex-1 flex-col gap-1">
          <h2 className="text-xl font-bold">Cart Total</h2>
          <div>
            <div className="flex justify-between text-[#555]">
              <p>Subtotal</p>
              <p>${total}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <p>Delivery Fee</p>
              <p>${total === 0 ? 0 : 2}</p>
            </div>
            <hr className="my-[10px]" />
            <div className="flex justify-between text-[#555]">
              <b>Total</b>
              <b>${total === 0 ? 0 : total + 2}</b>
            </div>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="border-none text-white bg-[tomato] w-[max(15vw,300px)] py-[8px] mt-2 rounded-[4px] cursor-pointer"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="flex flex-1 justify-center " id="cart-promocode">
          <div>
            <p className="text-[#555]">
              If you have a promo code, Enter it here
            </p>
            <div className="mt-2 flex justify-between items-center bg-[#eaeaea] rounded-[4px]">
              <input
                className="bg-transparent border-none outline-none pl-[10px]"
                type="text"
                placeholder="promo code"
              />
              <button className="w-[max(10vw,150px)] px-[12px] py-[5px] bg-black border-none text-white rounded-[4px]">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
