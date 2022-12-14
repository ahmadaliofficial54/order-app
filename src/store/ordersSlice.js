import { createSlice } from "@reduxjs/toolkit";
import { orders } from "../FrontendTaskMockOrdersData";

const initialState = {
  orders: orders,
};

export const ordersSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    searchOrders: (state, { payload }) => {
      let tempOrders = orders.filter((order) => {
        return (
          order?.orderID?.includes(payload) ||
          order?.customerName?.toLowerCase().includes(payload) ||
          order?.companyName?.toLowerCase().includes(payload)
        );
      });
      state.orders = tempOrders;
    },
  },
});

export const { searchOrders } = ordersSlice.actions;

export default ordersSlice.reducer;
