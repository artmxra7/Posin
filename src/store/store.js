import { configureStore } from "@reduxjs/toolkit";
import orderReducer from "./Order/OrderSlice";

const store = configureStore({
  reducer: {
    order: orderReducer,
  },
});

export default store;
