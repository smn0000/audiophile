import "./styles.scss"
import "../page.scss"
import Button from "../../components/button/Button"
import ProductCategories from "../../components/product-category/ProductCategories"
import BestGear from "../../components/best-gear/BestGear"
import { useNavigate } from "react-router-dom"

const Home = () => {
  const navigate = useNavigate()
  return (
    <main className='home'>
      <section className='hero-section'>
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
      <section className='products-preview'>
        <div className='product-preveiw product-preview__big'>
          <picture>
            <source
              srcSet='/assets/home/mobile/image-speaker-zx9.png'
              media='(max-width:768px)'
            />
            <source
              srcSet=''
              media='(max-width:1024px)'
            />

            <img
              src='/assets/home/tablet/image-speaker-zx9.png'
              loading='lazy'
              alt='ZX9 SPEAKER'
            />
          </picture>
          <div className='product-preview__big__right'>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              text='SEE PRODUCT'
              type='black'
              onClick={() => navigate("/product/zx9-speaker")}
            />
          </div>
        </div>

        <picture className='product-preveiw product-preveiw__medium'>
          <source
            srcSet='/assets/home/mobile/image-speaker-zx7.jpg'
            media='(max-width:768px)'
          />
          <source
            srcSet='/assets/home/tablet/image-speaker-zx7.jpg'
            media='(max-width:1024px)'
          />
          <img
            src='/assets/home/desktop/image-speaker-zx7.jpg'
            role='presentation'
            loading='lazy'
          />
          <div className='product-preview__medium__content'>
            <h2>ZX7 SPEAKER</h2>
            <Button
              type='alternate'
              text='SEE PRODUCT'
              onClick={() => navigate("/product/zx7-speaker")}
            />
          </div>
        </picture>

        <div className='product-preveiw product-preview__small'>
          <picture className='product-preview__small__left'>
            <source
              srcSet='/assets/home/mobile/image-earphones-yx1.jpg'
              media='(max-width:768px)'
            />
            <source
              srcSet='/assets/home/tablet/image-earphones-yx1.jpg'
              media='(max-width:1024px)'
            />
            <img
              src='/assets/home/desktop/image-earphones-yx1.jpg'
              role='presentation'
              loading='lazy'
            />
          </picture>
          <div className='product-preview__small__right'>
            <h2>YX1 EARPHONES</h2>
            <Button
              type='alternate'
              text='SEE PRODUCT'
              onClick={() => navigate("/product/yx1-earphones")}
            />
          </div>
        </div>
      </section>
      <section>
        <BestGear />
      </section>
    </main>
  )
}

export default Home
