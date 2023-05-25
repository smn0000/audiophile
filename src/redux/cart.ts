import { PayloadAction, createSlice } from "@reduxjs/toolkit"
import { TCartItem, ICart, IProduct } from "../interfaces"

const initialState: ICart = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmmount: 0,
}

const getIndexOfProduct = (product: IProduct, cart: TCartItem[]): -1 | number => {
  for (let i = 0; i < cart.length; i++) {
    if (cart[i].item.id === product.id) return i
  }
  return -1
}

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<TCartItem>) => {
      const { item, quantity } = action.payload
      if (getIndexOfProduct(item, state.cartItems) >= 0) {
        state.cartItems.map((cartItem) => (cartItem.item.id === item.id ? (cartItem.quantity += quantity) : cartItem))
      } else {
        state.cartItems = [...state.cartItems, action.payload]
      }
      state.cartTotalQuantity += quantity
      state.cartTotalAmmount += item.price * quantity
    },
    removeFromCart: (state, action: PayloadAction<TCartItem>) => {
      const { item } = action.payload
      const index = getIndexOfProduct(item, state.cartItems)

      if (index >= 0) {
        state.cartTotalAmmount -= state.cartItems[index].quantity * item.price
        state.cartTotalQuantity -= state.cartItems[index].quantity
        state.cartItems = state.cartItems.splice(index, 1)
      } else throw Error("This item isn't in the cart!")
    },

    modifyItem: (state, action: PayloadAction<TCartItem>) => {
      const { item, quantity } = action.payload
      const index = getIndexOfProduct(item, state.cartItems)
      if (index >= 0) {
        state.cartTotalAmmount -= state.cartItems[index].quantity * item.price
        state.cartTotalAmmount += +item.price * quantity
        state.cartTotalQuantity -= state.cartItems[index].quantity
        state.cartTotalQuantity += quantity
        state.cartItems = state.cartItems.map((cartItem) =>
          cartItem.item.id === item.id ? { item, quantity } : cartItem
        )
      } else throw Error("This item isn't in the cart!")
    },
    clearCart: (state) => {
      state.cartTotalAmmount = 0
      state.cartTotalQuantity = 0
      state.cartItems = []
    },
  },
})

export default cartSlice.reducer
export const { addToCart, removeFromCart, modifyItem, clearCart } = cartSlice.actions
