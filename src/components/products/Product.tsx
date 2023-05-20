import { IProduct } from "../../interfaces"
import Button from "../button/Button"

const Product = ({ product }: { product: IProduct }) => {
  return (
    <div className='product'>
      <picture className='product__image'>
        <source
          srcSet={product.image.mobile}
          media='(max-width:768px)'
        />

        <img
          src={product.image.desktop}
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
          onClick={() => console.log("Click", product.slug)}
        />
      </div>
    </div>
  )
}

export default Product
