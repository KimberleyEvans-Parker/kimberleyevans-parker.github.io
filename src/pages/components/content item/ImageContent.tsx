import { useState } from "react"
import { Carousel } from "react-responsive-carousel"
import { CAROUSEL_TRANSITION_TIME, CAROUSEL_INTERVAL } from "../../../helpers/Constants"
import { useDispatch } from "react-redux"
import { setImage } from "../../../redux/actions"
import { ModalState } from "../../../redux/state"
import { getImageName } from "../../../helpers/Helpers"

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
        const shouldLoad = (
          index === currentIndex ||
          index === currentIndex - 1 ||
          index === currentIndex + 1
        )

        const name = getImageName(image)
        
        const caption = heading ? heading + " - " + name : name;
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
                src={shouldLoad ? image: undefined}
              />
            ) : (
              <img alt={caption} src={shouldLoad ? image: undefined} />
            )}
          </button>
        )
      })}
    </Carousel>
  )
}
