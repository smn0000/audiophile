import "./styles.scss"

import ProductCategory from "./ProductCategory"

const ProductCategories = () => {
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
