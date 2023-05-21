import "./styles.scss"

const BestGear = () => {
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
      <picture className='best-gear__right'>
        <source
          srcSet='/assets/shared/mobile/image-best-gear.jpg'
          media='(max-width:768px)'
        />
        <source
          srcSet='/assets/shared/tablet/image-best-gear.jpg'
          media='(max-width:1024px)'
        />
        <img
          className='best-gear__right'
          loading='lazy'
          src='/assets/shared/desktop/image-best-gear.jpg'
          alt=''
        />
      </picture>
    </div>
  )
}

export default BestGear
