import { createSlice } from "@reduxjs/toolkit";
import { food_list } from "../assets/assets";
const initialState = {
  food_list,
  cartItems: {},
  category: "All",
};

export const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const itemId = action.payload;
      if (!state.cartItems[itemId]) {
        state.cartItems[itemId] = 1;
      } else {
        state.cartItems[itemId] += 1;
      }
    },
    removeFromCart: (state, action) => {
      const itemId = action.payload;
      if (state.cartItems[itemId] > 1) {
        state.cartItems[itemId] -= 1;
      } else {
        delete state.cartItems[itemId];
      }
    },
    getTotalCartAmount: (state) => {
      let totalAmount = 0;
      for (const item in state.cartItems) {
        const itemInfo = food_list.find((p) => p._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * state.cartItems[item];
        }
      }
      return totalAmount;
    },
    setCategory: (state, action) => {
      let cat = action.payload;
      state.category = cat;
    },
  },
});
export const { addToCart, removeFromCart, getTotalCartAmount, setCategory } =
  foodSlice.actions;
export default foodSlice.reducer;
