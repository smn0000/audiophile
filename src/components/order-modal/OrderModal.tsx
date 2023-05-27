import Button from "../button/Button"
import { useNavigate } from "react-router-dom"
import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { clearCart } from "../../redux/cart"
import "./styles.scss"

const OrderModal = () => {
  useEffect(() => {
    document.body.style.overflow = "hidden"

    return () => {
      document.body.style.overflow = "auto"
    }
  }, [])
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
    <>
      <div className='order-modal__background'></div>
      <div
        className='order-modal
  '>
        <div className='order__wrapper'>
          <svg
            width='64'
            height='64'
            xmlns='http://www.w3.org/2000/svg'>
            <g
              fill='none'
              fillRule='evenodd'>
              <circle
                fill='#D87D4A'
                cx='32'
                cy='32'
                r='32'
              />
              <path
                stroke='#FFF'
                stroke-width='4'
                d='m20.754 33.333 6.751 6.751 15.804-15.803'
              />
            </g>
          </svg>
          <h3>THANK YOU FOR YOUR ORDER</h3>
          <p>You will recieve an email confirmation shortly</p>

          <Button
            text='BACK TO HOME'
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
