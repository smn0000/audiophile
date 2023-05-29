import Button from "../button/Button"
import { useRef } from "react"
import "./styles.scss"
import { useOnClickOutside } from "usehooks-ts"
import { useNavigate } from "react-router-dom"
import { useAppSelector } from "../../redux/store"
import { useDispatch } from "react-redux"
import { clearCart } from "../../redux/cart"
import { toast } from "react-toastify"

import CartItem from "../cart-item/CartItem"

const CartModal = ({ closeModal }: { closeModal: () => void }) => {
  const modalRef = useRef(null)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { cartItems, cartTotalAmmount, cartTotalQuantity } = useAppSelector(
    (state) => state.cart
  )

  useOnClickOutside(modalRef, closeModal)

  const currencyFormatter = new Intl.NumberFormat("us-US", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "USD",
  })
  return (
    <>
      <div className="cart__modal__background"></div>
      <div className="cart__modal" ref={modalRef}>
        <div className="cart__wrapper">
          <div className="cart__top">
            <p className="cart__top__quantity">Cart ({cartTotalQuantity})</p>
            <button
              className="cart__top__button"
              onClick={() => {
                dispatch(clearCart())
                toast.success("Items removed", {
                  position: "top-right",
                  autoClose: 500,
                  hideProgressBar: true,
                  closeOnClick: true,
                  pauseOnHover: false,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                })
              }}
            >
              Remove all
            </button>
          </div>
          <div className="cart__items">
            {cartItems.length === 0 ? (
              <p>Your cart is empty</p>
            ) : (
              cartItems.map((cartItem) => (
                <CartItem key={cartItem.item.id} data={cartItem} />
              ))
            )}
          </div>
          <div className="cart__bottom">
            <div className="cart__bottom__total">
              <p className="cart__bottom__total-text">TOTAL</p>
              <p className="cart__bottom__total-ammount">
                {currencyFormatter.format(cartTotalAmmount)}
              </p>
            </div>
            <Button
              text="CHECKOUT"
              onClick={() => {
                navigate("/checkout")
                closeModal()
              }}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default CartModal
