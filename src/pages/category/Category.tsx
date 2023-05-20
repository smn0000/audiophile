import { useParams } from "react-router-dom"
import BestGear from "../../components/best-gear/BestGear"
import ProductCategories from "../../components/product-category/ProductCategories"
import Products from "../../components/products/Products"
import "./styles.scss"
const Category = () => {
  const { name } = useParams()

  return (
    <main className='category'>
      <section className='category__title'>
        <h2>{name}</h2>
      </section>
      <section>
        <Products category={name ? name : ""} />
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

export default Category
