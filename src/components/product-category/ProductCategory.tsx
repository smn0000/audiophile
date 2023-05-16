import Button from "../button/Button"
import { useNavigate } from "react-router-dom"
import { useLocation } from "react-router-dom"
import "./styles.scss"
const ProductCategory = ({
  name,
  image,
  linkTo,
}: {
  name: string
  image: string
  linkTo: string
}) => {
  const navigate = useNavigate()

  return (
    <div className='product-category__wrapper'>
      <img
        className='product-category__image'
        src={image}
        alt=''
      />
      <div className='product-category__box'>
        {name}
        <Button
          text='shop'
          onClick={() => navigate(linkTo)}
          type='transparent'
        />
      </div>
    </div>
  )
}

export default ProductCategory
