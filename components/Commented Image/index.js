import Image from 'next/image'
import { Collapse, useDisclosure } from '@chakra-ui/react'
import React, { useCallback, useMemo, useState } from 'react'

const CommentedImage = React.memo(({ src, text }) => {
  const { isOpen, onToggle } = useDisclosure()
  const [isTouchDevice, setIsTouchDevice] = useState(false)

  const memoizedOnToggle = useCallback(() => {
    if (!isTouchDevice) {
      onToggle()
    }
  }, [isTouchDevice, onToggle])

  const memoizedIsOpen = useMemo(() => {
    return isOpen
  }, [isOpen])

  const handleTouchStart = useCallback(() => {
    setIsTouchDevice(true)
    onToggle()
  }, [onToggle])

  const handleTouchEnd = useCallback(() => {
    setIsTouchDevice(true)
    onToggle()
  }, [onToggle])

  return (
    <>
      <div
        className="flex flex-col items-center bg-pink-100 transition-all duration-300 hover:shadow-lg hover:bg-pink-200 cursor-pointer"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Image className="p-5" src={src} width="250" height="200" onMouseOver={memoizedOnToggle} onMouseOut={memoizedOnToggle} alt=''/>
        <Collapse in={memoizedIsOpen}>
          <h1 className="text-pink-400 font-bold uppercase pb-2">{text}</h1>
        </Collapse>
      </div>
    </>
  )
})

export default CommentedImage