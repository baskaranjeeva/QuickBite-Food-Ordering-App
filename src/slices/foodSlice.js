import { createSlice } from "@reduxjs/toolkit";
import { food_list } from "../assets/assets";
const initialState = {
  food_list,
  cartItems: {},
  category: "All",
  showLogin: false,
  total: 0,
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
        if (state.cartItems[item] > 0) {
          const itemInfo = food_list.find((product) => product._id === item);
          totalAmount += itemInfo.price * state.cartItems[item];
        }
      }
      state.total = totalAmount;
    },
    setCategory: (state, action) => {
      let cat = action.payload;
      state.category = cat;
    },
    setShowLogin: (state, action) => {
      let status = action.payload;
      state.showLogin = status;
    },
  },
});
export const {
  addToCart,
  removeFromCart,
  getTotalCartAmount,
  setCategory,
  setShowLogin,
} = foodSlice.actions;
export default foodSlice.reducer;
