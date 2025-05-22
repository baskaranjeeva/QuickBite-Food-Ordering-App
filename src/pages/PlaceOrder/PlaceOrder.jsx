import React from "react";
import { useSelector } from "react-redux";

function PlaceOrder() {
  const { total } = useSelector((state) => state.food);
  return (
    <form className="flex items-start justify-between gap-[100px] mt-[80px]">
      <div className="w-full max-w-[max(30% 500px)]">
        <p className="text-[30px] font-bold mb-[10px]">Delivery Information</p>
        <div className="flex gap-[8px] ">
          <input
            className="mb-[15px] w-full p-[10px] rounded-[4px] outline-[tomato] border-1 border-solid border-[#c5c5c5]"
            type="text"
            placeholder="First Name"
          />
          <input
            className="mb-[15px] w-full p-[10px] rounded-[4px] outline-[tomato] border-1 border-solid border-[#c5c5c5]"
            type="text"
            placeholder="Last Name"
          />
        </div>
        <input
          className="mb-[15px] w-full p-[10px] rounded-[4px] outline-[tomato] border-1 border-solid border-[#c5c5c5]"
          type="email"
          placeholder="Email address"
        />
        <input
          className="mb-[15px] w-full p-[10px] rounded-[4px] outline-[tomato] border-1 border-solid border-[#c5c5c5]"
          type="text"
          placeholder="Street"
        />
        <div className="flex gap-[10px] ">
          <input
            className="mb-[15px] w-full p-[10px] rounded-[4px] outline-[tomato] border-1 border-solid border-[#c5c5c5]"
            type="text"
            placeholder="City"
          />
          <input
            className="mb-[15px] w-full p-[10px] rounded-[4px] outline-[tomato] border-1 border-solid border-[#c5c5c5]"
            type="text"
            placeholder="State"
          />
        </div>
        <div className="flex gap-[10px] ">
          <input
            className="mb-[15px] w-full p-[10px] rounded-[4px] outline-[tomato] border-1 border-solid border-[#c5c5c5]"
            type="text"
            placeholder="Zip Code"
          />
          <input
            className="mb-[15px] w-full p-[10px] rounded-[4px] outline-[tomato] border-1 border-solid border-[#c5c5c5]"
            type="text"
            placeholder="Country"
          />
        </div>
        <input
          className="mb-[15px] w-full p-[10px] rounded-[4px] outline-[tomato] border-1 border-solid border-[#c5c5c5]"
          type="text"
          placeholder="Phone"
        />
      </div>
      <div className="w-full max-w-[max(40% 500px)]">
        <div className="flex flex-1 flex-col gap-1 mt-[20px]">
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
          <button className="border-none text-white bg-[tomato] w-[max(15vw,300px)] py-[8px] mt-2 rounded-[4px] cursor-pointer mt-[30px]">
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </form>
  );
}

export default PlaceOrder;
