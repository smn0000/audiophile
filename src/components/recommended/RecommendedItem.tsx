import "./styles.scss"
import { TOther } from "../../interfaces"
import { useNavigate } from "react-router-dom"
import Button from "../button/Button"

const RecommendedItem = ({ product }: { product: TOther }) => {
  const navigate = useNavigate()
  console.log(product.slug)
  return (
    <div
      key={product.slug}
      className='recommended__item'>
      <picture>
        <source
          srcSet={product.image.mobile}
          media='(max-width:768px)'
        />
        <source
          srcSet={product.image.tablet}
          media='(max-width:1024px)'
        />
        <img
          src={product.image.desktop}
          role='presentation'
          loading='lazy'
        />
      </picture>
      <h4>{product.name}</h4>
      <Button
        text='SEE PRODUCT'
        onClick={() => navigate(`/product/${product.slug}`)}
      />
    </div>
  )
}

export default RecommendedItem
