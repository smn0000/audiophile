import Button from "../button/Button"
import { useNavigate } from "react-router-dom"
import { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { clearCart } from "../../redux/cart"
import { currencyFormatter, parseItemName } from "../../functions"
import "./styles.scss"
import { TCartItem } from "../../interfaces"

const OrderModal = ({
  cartItems,
  cartTotalAmmount,
}: {
  cartItems: TCartItem[]
  cartTotalAmmount: number
}) => {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [isShowAll, setIsShowAll] = useState(false)
  return (
    <>
      <div className="order-modal__background"></div>
      <div className="order-modal">
        <div className="order__wrapper">
          <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fillRule="evenodd">
              <circle fill="#D87D4A" cx="32" cy="32" r="32" />
              <path
                stroke="#FFF"
                strokeWidth="4"
                d="m20.754 33.333 6.751 6.751 15.804-15.803"
              />
            </g>
          </svg>
          <h3>THANK YOU FOR YOUR ORDER</h3>
          <p>You will recieve an email confirmation shortly</p>
          <div className="order-modal__items">
            <div className="order-modal__items__list">
              {cartItems.map((el, index) => (
                <div
                  key={index}
                  className={`order-modal__item ${
                    !isShowAll && index != 0 ? "hidden" : ""
                  }`}
                >
                  <img
                    className="order-modal__item__image"
                    src={el.item.image.desktop}
                    role="presentation"
                    loading="lazy"
                  />
                  <div className="order-modal__item__info">
                    <p className="cart__item__name">
                      {parseItemName(el.item.name)}
                    </p>
                    <p className="cart__item__price">
                      {currencyFormatter.format(el.item.price)}
                    </p>
                  </div>
                  <div className="cart__item__quantity">x{el.quantity}</div>
                </div>
              ))}

              <button
                onClick={() => setIsShowAll((current) => !current)}
                className="order-modal__show-button"
              >
                {isShowAll
                  ? "View less"
                  : `and ${cartItems.length - 1} other item(s)`}
              </button>
            </div>

            <div className="order-modal__total">
              <p className="order-modal__total__text">GRAND TOTAL</p>
              <p className="order-modal__total__ammount">
                {currencyFormatter.format(cartTotalAmmount)}
              </p>
            </div>
          </div>

          <Button
            text="BACK TO HOME"
            onClick={() => {
              navigate("/")
              dispatch(clearCart())
            }}
          />
        </div>
      </div>
    </>
  )
}

export default OrderModal
