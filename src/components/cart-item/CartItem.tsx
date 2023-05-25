import "./styles.scss"
import { TCartItem } from "../../interfaces"
import NumberSelector from "../number-selector/NumberSelector"
import { useDispatch } from "react-redux"
import { modifyItem } from "../../redux/cart"
import { useAppSelector } from "../../redux/store"

const CartItem = ({ data }: { data: TCartItem }) => {
  const dispatch = useDispatch()

  const cartItem = useAppSelector((state) => state.cart.cartItems.filter((el) => el.item.id === data.item.id))
  const { item, quantity } = cartItem[0]

  const currencyFormatter = new Intl.NumberFormat("us-US", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "USD",
  })

  const parseItemName = (name: string): string => {
    let string = ""
    for (let i = 0; i < name.length; i++) {
      if (name[i] === " ") break
      else string = string + name[i]
    }
    return string
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
          <p>{parseItemName(item.name)}</p>
          <p>{currencyFormatter.format(item.price)}</p>
        </div>
      </div>
      <div className='cart-item__right'>
        <NumberSelector
          onIncrement={() => dispatch(modifyItem({ item, quantity: quantity + 1 }))}
          onDecrement={() => dispatch(modifyItem({ item, quantity: quantity - 1 }))}
          onSet={(value) => dispatch(modifyItem({ item, quantity: value }))}
          currentValue={quantity}
        />
      </div>
    </div>
  )
}

export default CartItem
