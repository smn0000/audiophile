import Button from "../button/Button"
import "./styles.scss"
const ProductCategory = ({ name, image }: { name: string; image: string }) => {
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
          onClick={() => console.log("click")}
          type='transparent'
        />
      </div>
    </div>
  )
}

export default ProductCategory
