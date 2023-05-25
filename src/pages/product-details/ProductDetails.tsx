import "./styles.scss"
import "../page.scss"
import { useParams } from "react-router-dom"
import { useMemo, useState } from "react"
import data from "../../data.json"
import { IProduct } from "../../interfaces"
import { useNavigate } from "react-router-dom"
import NumberSelector from "../../components/number-selector/NumberSelector"
import Button from "../../components/button/Button"
import Recommended from "../../components/recommended/Recommended"
import ProductCategories from "../../components/product-category/ProductCategories"
import BestGear from "../../components/best-gear/BestGear"
import { useDispatch } from "react-redux"
import { addToCart } from "../../redux/cart"

const Product = () => {
  const { name } = useParams()
  const getData = (): IProduct => {
    return data.filter((el) => el.slug === name)[0]
  }
  const product = useMemo(getData, [name])
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1)
  const navigate = useNavigate()

  const dispatch = useDispatch()

  const currencyFormatter = new Intl.NumberFormat("us-US", {
    maximumFractionDigits: 0,
    style: "currency",
    currency: "USD",
  })

  return (
    <main className='product-details'>
      <section>
        <button
          onClick={() => navigate(-1)}
          className='product-details__back-btn'>
          Go Back
        </button>
        <div className='product-details__main'>
          <picture className='product-details__main__image'>
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
          <div className='product-details__main__text'>
            {product.new && <p className='overline'>NEW PRODUCT</p>}
            <h2>{product.name}</h2>
            <p className='product-details__main__description'>{product.description}</p>
            <p className='product-details__main__price'>{currencyFormatter.format(product.price)}</p>

            <div className='product-details__main__add-to-cart'>
              <NumberSelector
                onIncrement={() => setSelectedQuantity((current) => current + 1)}
                onDecrement={() => setSelectedQuantity((current) => current - 1)}
                onSet={(value) => setSelectedQuantity(value)}
                currentValue={selectedQuantity}
              />
              <Button
                text='ADD TO CART'
                onClick={() => dispatch(addToCart({ item: product, quantity: selectedQuantity }))}
              />
            </div>
          </div>
        </div>
      </section>

      <section className='product-details__info'>
        <div className='product-details__features'>
          <h3>FEATURES</h3>
          <p className='product-details__features__text'>{product.features}</p>
        </div>
        <div className='product-details__box'>
          <h3>IN THE BOX</h3>
          <ul className='product-details__box__list'>
            {product.includes.map((el, index) => (
              <li key={index}>
                <span className='product-details__box__quantity'>{el.quantity}x</span>
                {el.item}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <section className='product-details__images'>
        <picture className='product-details__images__first'>
          <source
            srcSet={product.gallery.first.mobile}
            media='(max-width:768px)'
          />
          <source
            srcSet={product.gallery.first.tablet}
            media='(max-width:1024px)'
          />
          <img
            src={product.gallery.first.desktop}
            loading='lazy'
            alt=''
          />
        </picture>
        <picture className='product-details__images__second'>
          <source
            srcSet={product.gallery.second.mobile}
            media='(max-width:768px)'
          />
          <source
            srcSet={product.gallery.second.tablet}
            media='(max-width:1024px)'
          />
          <img
            src={product.gallery.second.desktop}
            loading='lazy'
            alt=''
          />
        </picture>

        <picture className='product-details__images__third'>
          <source
            srcSet={product.gallery.third.mobile}
            media='(max-width:768px)'
          />
          <source
            srcSet={product.gallery.third.tablet}
            media='(max-width:1024px)'
          />
          <img
            src={product.gallery.third.desktop}
            loading='lazy'
            alt=''
          />
        </picture>
      </section>
      <section>
        <Recommended products={product.others} />
      </section>
      <section>
        <ProductCategories />
      </section>
      <section>
        <BestGear />
      </section>
    </main>
  )
}

export default Product
