import "./styles.scss"
import "../page.scss"
import Button from "../../components/button/Button"
import ProductCategories from "../../components/product-category/ProductCategories"
import { useMediaQuery } from "usehooks-ts"
import { useEffect, useState } from "react"

const Home = () => {
  const isMobile = useMediaQuery("(max-width:375px)")
  const isTablet = useMediaQuery("(max-width:768px)")

  // Changes the images when  viewport changes
  const [images, setImages] = useState({
    big: "/assets/home/desktop/image-speaker-zx9.png",
    medium: "/assets/home/desktop/image-speaker-zx7.jpg",
    small: "/assets/home/desktop/image-earphones-yx1.jpg",
  })
  useEffect(() => {
    if (isMobile) {
      setImages({
        big: "/assets/home/mobile/image-speaker-zx9.png",
        medium: "/assets/home/mobile/image-speaker-zx7.jpg",
        small: "/assets/home/mobile/image-earphones-yx1.jpg",
      })
      return
    }
    if (isTablet) {
      setImages({
        big: "/assets/home/tablet/image-speaker-zx9.png",
        medium: "/assets/home/tablet/image-speaker-zx7.jpg",
        small: "/assets/home/tablet/image-earphones-yx1.jpg",
      })
      return
    }
    if (!isMobile && !isTablet) {
      setImages({
        big: "/assets/home/desktop/image-speaker-zx9.png",
        medium: "/assets/home/desktop/image-speaker-zx7.jpg",
        small: "/assets/home/desktop/image-earphones-yx1.jpg",
      })
      return
    }
    console.log(isMobile, isTablet)
  }, [isMobile, isTablet])

  return (
    <div className='home'>
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
        <div className='product-preview__big'>
          <img
            src={images.big}
            loading='lazy'
            alt='ZX9 SPEAKER'
          />
          <div className='product-preview__big__right'>
            <h1>ZX9 SPEAKER</h1>
            <p>
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Button
              text='SEE PRODUCT'
              type='black'
              onClick={() => console.log("click")}
            />
          </div>
        </div>

        <div
          className='product-preveiw__medium'
          style={{ backgroundImage: `url('${images.medium}')` }}>
          <h1>ZX7 SPEAKER</h1>
          <Button
            type='alternate'
            text='SEE PRODUCT'
            onClick={() => console.log("click")}
          />
        </div>
      </section>
    </div>
  )
}

export default Home
