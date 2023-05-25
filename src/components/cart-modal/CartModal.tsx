import Button from "../button/Button"
import { useRef } from "react"
import "./styles.scss"
import { useOnClickOutside } from "usehooks-ts"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../redux/store"
import { useDispatch } from "react-redux"
import { clearCart } from "../../redux/cart"

import CartItem from "../cart-item/CartItem"

const CartModal = ({ closeModal }: { closeModal: () => void }) => {
  const modalRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cartItems, cartTotalAmmount, cartTotalQuantity } = useAppSelector((state) => state.cart)

  useOnClickOutside(modalRef, closeModal)

  const currencyFormatter = new Intl.NumberFormat("us-US", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "USD",
  })
  return (
    <>
      <div className='cart__modal__background'></div>
      <div
        className='cart__modal'
        ref={modalRef}>
        <div className=''>
          <span>Cart({cartTotalQuantity})</span>
          <button onClick={() => dispatch(clearCart())}>Remove all</button>

          <div>
            {cartItems.map((cartItem) => (
              <CartItem
                key={cartItem.item.id}
                data={cartItem}
              />
            ))}
          </div>
          <div>
            <span>TOTAL</span>
            <p>{currencyFormatter.format(cartTotalAmmount)}</p>
            <Button
              text='CHECKOUT'
              onClick={() => navigate("/checkout")}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartModal
