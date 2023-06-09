import "./styles.scss"
import { TCartItem } from "../../interfaces"
import NumberSelector from "../number-selector/NumberSelector"
import { useDispatch } from "react-redux"
import { modifyItem, removeFromCart } from "../../redux/cart"
import { useAppSelector } from "../../redux/store"
import { parseItemName, currencyFormatter } from "../../functions"

const CartItem = ({ data }: { data: TCartItem }) => {
  const dispatch = useDispatch()

  const cartItem = useAppSelector((state) => state.cart.cartItems.filter((el) => el.item.id === data.item.id))
  const { item, quantity } = cartItem[0]

  const handleDecrement = () => {
    if (quantity === 1) return dispatch(removeFromCart({ item, quantity }))
    dispatch(modifyItem({ item, quantity: quantity - 1 }))
  }
  return (
    <div className='cart-item'>
      <div className='cart-item__left'>
        <img
          className='cart-item__image'
          src={item.image.desktop}
          role='presentation'
          loading='lazy'
        />
        <div>
          <p className='cart-item__name'>{parseItemName(item.name)}</p>
          <p className='cart-item__price'>{currencyFormatter.format(item.price)}</p>
        </div>
      </div>
      <div className='cart-item__right'>
        <NumberSelector
          onIncrement={() => dispatch(modifyItem({ item, quantity: quantity + 1 }))}
          onDecrement={handleDecrement}
          onSet={(value) => dispatch(modifyItem({ item, quantity: value }))}
          currentValue={quantity}
        />
      </div>
    </div>
  )
}

export default CartItem
