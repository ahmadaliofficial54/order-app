import { configureStore } from "@reduxjs/toolkit";
import ordersSlice from "./ordersSlice";
const store = configureStore({
  reducer: {
    orderStore: ordersSlice,
  },
});
export default store;
