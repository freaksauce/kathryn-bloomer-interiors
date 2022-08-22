import React, { useState } from 'react'
import { string } from 'prop-types'
import Spinner from './Spinner'

const ImageOld = props => {
  const {
    sm, lg, alt, className
  } = props
  console.log('', sm, lg);
  const [imgLoaded, setImgLoaded] = useState(false)
  const [loadedClasses, setLoadedClasses] = useState('block invisible')
  const hiddenClasses = 'hidden'
  const displayClasses = 'visible animate-fadeIn'

  const handleImageLoaded = () => {
    console.log('image loaded');
    setImgLoaded(true)
    setTimeout(() => setLoadedClasses(displayClasses), 200)
  }

  return (
    <>
      {!imgLoaded && <Spinner />}
      <picture>
        <source
          media="(min-width: 575px)"
          srcSet={lg}
        />
        <img
          className={`${className} ${!imgLoaded ? hiddenClasses : loadedClasses}`}
          src={sm}
          alt={alt}
          onLoad={handleImageLoaded}
        />
      </picture>
    </>
  )
}

ImageOld.defaultProps = {
  className: ''
}
ImageOld.propTypes = {
  className: string,
  sm: string.isRequired,
  lg: string.isRequired,
  alt: string.isRequired
}

export default ImageOld
