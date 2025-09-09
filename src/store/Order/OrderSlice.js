import { createSlice } from "@reduxjs/toolkit";

export const orderSlice = createSlice({
  name: "order",
  initialState: {
    order: [],
    subtotal: 0,
    tax: 0,
    voucher: 0,
    total_price: 0,
    error: false,
  },
  reducers: {
    setOrder: (state, action) => {
      const { order, subtotal, tax, voucher, total_price } = action.payload;

      // Cek apakah order valid dan bukan null atau undefined
      if (!order || order.length === 0) {
        console.error("Pesanan tidak valid");
        return;
      }

      console.log("Order yang diterima di reducer:", order); // Log untuk melihat order sebelum mutasi

      state.order = order; // Menggunakan Immer untuk mutasi
      state.subtotal = subtotal;
      state.tax = tax;
      state.voucher = voucher;
      state.total_price = total_price;

     console.log("Order set ke Redux Store:", JSON.stringify(state, null, 2));
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    resetOrder: (state) => {
      state.order = [];
      state.subtotal = 0;
      state.tax = 0;
      state.voucher = 0;
      state.total_price = 0;
      state.error = false;
    },
  },
});

export const { setOrder, setError, resetOrder } = orderSlice.actions;

export default orderSlice.reducer;
