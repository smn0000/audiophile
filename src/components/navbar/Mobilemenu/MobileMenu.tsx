import ProductCategories from "../../product-category/ProductCategories"
import { useLocation } from "react-router-dom"
import { useEffect } from "react"

import "./styles.scss"

const MobileMenu = ({ closeMenu }: { closeMenu: () => any }) => {
  return (
    <>
      <div className='mobile-menu'>
        <ProductCategories />
      </div>
    </>
  )
}

export default MobileMenu
