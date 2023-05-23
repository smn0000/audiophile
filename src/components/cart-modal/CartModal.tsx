import Button from "../button/Button"
import { useRef } from "react"
import "./styles.scss"
import { useOnClickOutside } from "usehooks-ts"
import { useNavigate } from "react-router-dom"

const CartModal = ({ closeModal }: { closeModal: () => void }) => {
  const modalRef = useRef(null)
  const navigate = useNavigate()

  useOnClickOutside(modalRef, closeModal)
  return (
    <>
      <div className='cart__modal__background'></div>
      <div
        className='cart__modal'
        ref={modalRef}>
        <div className=''>
          <span>Cart(3)</span>
          <button>Remove all</button>

          <div>
            <div>Item1</div>
            <div>Item2</div>
            <div>Item3</div>
          </div>
          <div>
            <span>TOTAL</span>
            <p>$5,396</p>
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
