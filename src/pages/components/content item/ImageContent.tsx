import { CAROUSEL_INTERVAL, CAROUSEL_TRANSITION_TIME } from "../../../helpers/Constants"

import { Carousel } from "react-responsive-carousel"
import { ModalState } from "../../../redux/state"
import { getImageName } from "../../../helpers/Helpers"
import { setImage } from "../../../redux/actions"
import { useDispatch } from "react-redux"
import { useState } from "react"

interface ImageContentProps {
  images: string[]
  heading: string
}

export const ImageContent = ({images, heading}: ImageContentProps) => {
  const [currentIndex, setCurrentIndex] = useState(0)

  const dispatch = useDispatch()

  const openModal = (index: number, captionHeader: string) => {
    const newModalState: ModalState = {
      images: images,
      selectedImage: index,
      captionHeader: captionHeader,
    }
    dispatch(setImage(newModalState))
  }

  return (
    <Carousel
      autoPlay
      showIndicators={images.length > 1}
      showStatus={images.length > 1}
      showThumbs={false}
      transitionTime={CAROUSEL_TRANSITION_TIME}
      interval={CAROUSEL_INTERVAL}
      infiniteLoop={true}
      className="shadow"
      selectedItem={currentIndex}
      onChange={setCurrentIndex}
    >
      {images.map((image: string, index: number) => {
        const shouldLazyLoad = (
          index === currentIndex ||
          index === currentIndex - 1 ||
          index === currentIndex + 1
        )

        const name = getImageName(image)
        
        const caption = heading ? heading + " - " + name : name
        return (
          <button
            onClick={() => openModal(index, heading)}
            key={caption}
          >
            {image.match(/\.(mp4|webm|ogg)$/i) ? (
              <video
                muted
                autoPlay
                loop
                src={image}
              />
            ) : (
              <img alt={caption} src={image} loading={shouldLazyLoad ? "lazy" : undefined} />
            )}
          </button>
        )
      })}
    </Carousel>
  )
}
