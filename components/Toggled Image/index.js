import { useState } from 'react'

const ToggledImage = ({ active, nonactive }) => {
  // image source toggles
  const [image, setImage] = useState(false)

  const handleOnHover = (setState) => {
    setState((prevMode) => !prevMode)
  }

  return (
    <>
      {image ? (
        <img
          src={active}
          className="w-48 h-48 sm:w-60 sm:h-60 transition-all duration-200"
          onMouseEnter={() => handleOnHover(setImage)}
          onMouseLeave={() => handleOnHover(setImage)}
          alt=""
          style={{ maxWidth: '100%' }}
        />
      ) : (
        <img
          src={nonactive}
          className="w-48 h-48 sm:w-60 sm:h-60 transition-all duration-200"
          onMouseEnter={() => handleOnHover(setImage)}
          onMouseLeave={() => handleOnHover(setImage)}
          alt=""
          style={{ maxWidth: '100%' }}
        />
      )}
    </>
  )
}

export default ToggledImage