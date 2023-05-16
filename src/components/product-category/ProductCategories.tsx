import "./styles.scss"
/* import data from "../../data.json"
import { useMemo } from "react" */
import ProductCategory from "./ProductCategory"

interface ICategory {
  category: string
  image: {
    mobile: string
    tablet: string
    desktop: string
  }
}
const ProductCategories = () => {
  /*const getCategories = () => {
    let seen: string[] = []
    let categories: ICategory[] = []
    data.forEach((el) => {
      if (seen.indexOf(el.category) === -1) {
        categories.push({ category: el.category, image: el.categoryImage })
      }
      seen.push(el.category)
    })
    return categories
  }
  const categories = useMemo(getCategories, [])
 */
  return (
    <div className='product-categories'>
      <ProductCategory
        name={"HEADPHONES"}
        image={"/assets/shared/desktop/image-category-thumbnail-headphones.png"}
        linkTo='/category/headphones'
      />
      <ProductCategory
        name={"SPEAKERS"}
        image={"/assets/shared/desktop/image-category-thumbnail-speakers.png"}
        linkTo='/category/speakers'
      />
      <ProductCategory
        name={"EARPHONES"}
        image={"/assets/shared/desktop/image-category-thumbnail-earphones.png"}
        linkTo='/category/earphones'
      />
    </div>
  )
}

export default ProductCategories
