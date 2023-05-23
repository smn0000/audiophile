import { TOther } from "../../interfaces"

import RecommendedItem from "./RecommendedItem"
import "./styles.scss"

const Recommended = ({ products }: { products: TOther[] }) => {
  return (
    <>
      <h4 className='recommended__title'>YOU MAY ALSO LIKE</h4>
      <div className='recommended-items__wrapper'>
        {products.map((product, index) => (
          <RecommendedItem
            product={product}
            key={index}
          />
        ))}
      </div>
    </>
  )
}

export default Recommended
