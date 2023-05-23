import { createSlice } from "@reduxjs/toolkit"
import { TCartItem, ICart } from "../interfaces"

const initialState: ICart = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmmount: 0,
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {},
  },
})
