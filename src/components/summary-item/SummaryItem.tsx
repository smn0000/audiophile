import { TCartItem } from "../../interfaces"
import { parseItemName, currencyFormatter } from "../../functions"
import "./styles.scss"

const SummaryItem = ({ data }: { data: TCartItem }) => {
  return (
    <div className='summary-item__wrapper'>
      <img
        className='summary-item__image'
        src={data.item.image.desktop}
        role='presentation'
        loading='lazy'
      />
      <div className='summary-item__middle'>
        <p className='item__name'>{parseItemName(data.item.name)}</p>
        <p className='item__price'>{currencyFormatter.format(data.item.price)}</p>
      </div>
      <div className='summary-item__quantity'>
        <p>x{data.quantity}</p>
      </div>
    </div>
  )
}

export default SummaryItem
