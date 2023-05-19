import "./styles.scss"
import { useState, useEffect } from "react"
import { useMediaQuery } from "usehooks-ts"

const BestGear = () => {
  const isTablet = useMediaQuery("(max-width:1024px)")
  const isMobile = useMediaQuery("(max-width:768px)")
  const [image, setImage] = useState(
    "/assets/shared/desktop/image-best-gear.jpg"
  )

  useEffect(() => {
    if (isMobile) {
      setImage("/assets/shared/mobile/image-best-gear.jpg")
      return
    }
    if (isTablet) {
      setImage("/assets/shared/tablet/image-best-gear.jpg")
      return
    }
    setImage("/assets/shared/desktop/image-best-gear.jpg")
  }, [isMobile, isTablet])

  return (
    <div className='best-gear'>
      <div className='best-gear__left'>
        <h2>
          BRINGING YOU THE <span className='highlight'>BEST</span> AUDIO GEAR
        </h2>
        <p>
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>

      <img
        className='best-gear__right'
        loading='lazy'
        src={image}
        alt=''
      />
    </div>
  )
}

export default BestGear
