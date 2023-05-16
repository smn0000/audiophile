import "./styles.scss"
import "../page.scss"
import Button from "../../components/button/Button"

import ProductCategories from "../../components/product-category/ProductCategories"

const Home = () => {
  return (
    <div className='home'>
      <section>
        <div className='hero__wrapper'>
          <div className='hero'>
            <p className='overline'>NEW PRODUCT</p>
            <h1>XX99 MARK II HEADPHONES</h1>
            <p className='hero__description'>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <Button
              onClick={() => console.log("Click")}
              text='SEE PRODUCT'
            />
          </div>
        </div>
      </section>
      <section>
        <ProductCategories />
      </section>
    </div>
  )
}

export default Home
