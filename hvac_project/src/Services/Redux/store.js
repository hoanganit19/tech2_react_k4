import { configureStore } from "@reduxjs/toolkit";
import { cartSlice } from "../../Pages/Cart/cartSlice";
export const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});
