import ProductCategories from "../../product-category/ProductCategories"
import { useOnClickOutside } from "usehooks-ts"
import { useRef } from "react"

import "./styles.scss"

const MobileMenu = ({ closeMenu }: { closeMenu: () => any }) => {
  const menuRef = useRef(null)
  useOnClickOutside(menuRef, closeMenu, "mouseup")

  return (
    <>
      <div className="mobile-menu" ref={menuRef}>
        <ProductCategories />
      </div>
    </>
  )
}

export default MobileMenu
