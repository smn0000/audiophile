import "./styles.scss"
import { useParams } from "react-router-dom"
import { useMemo, useState } from "react"
import data from "../../data.json"
import { IProduct } from "../../interfaces"
import { useNavigate } from "react-router-dom"
import NumberSelector from "../../components/number-selector/NumberSelector"

const Product = () => {
  const { name } = useParams()
  const getData = (): IProduct => {
    return data.filter((el) => el.slug === name)[0]
  }
  const product = useMemo(getData, [])
  const [selectedQuantity, setSelectedQuantity] = useState<number>(1)
  const navigate = useNavigate()
  return (
    <div className='product-details'>
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
            <p>{product.description}</p>
            <p>{product.price}</p>

            <NumberSelector
              updateValue={(value: number) => setSelectedQuantity(value)}
            />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Product
