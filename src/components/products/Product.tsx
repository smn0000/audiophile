import { IProduct } from "../../interfaces"
import Button from "../button/Button"
import { useNavigate } from "react-router-dom"

const ProductDetails = ({ product }: { product: IProduct }) => {
  const navigate = useNavigate()
  return (
    <div className='product'>
      <picture className='product__image'>
        <source
          srcSet={product.categoryImage.mobile}
          media='(max-width:768px)'
        />
        <source
          srcSet={product.categoryImage.tablet}
          media='(max-width:1024px)'
        />

        <img
          src={product.categoryImage.desktop}
          role='presentation'
          loading='lazy'
        />
      </picture>
      <div className='product__text'>
        {product.new && <p className='overline'>NEW PRODUCT</p>}
        <h2>{product.name}</h2>
        <p className='product__description'>{product.description}</p>
        <Button
          text='SEE PRODUCT'
          onClick={() => navigate(`/product/${product.slug}`)}
        />
      </div>
    </div>
  )
}

export default ProductDetails
