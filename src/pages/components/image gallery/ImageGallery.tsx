import React from "react"

import { SMALL_SCREEN } from "../../../helpers/Constants"
import { ImageGalleryCollumn } from "./ImageGalleryCollumn"
import { Modal } from "../modal/Modal"

import "react-responsive-carousel/lib/styles/carousel.min.css"
import "./image-gallery.css"

interface ImageGalleryProps {
  images: string[]
}

const ImageGallery = ({ images }: ImageGalleryProps) => {

  // Keeps track of the window dimensions.  Updates when window resizes
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  // collumns of images
  var l3_1 = []
  var l3_2 = []
  var l3_3 = []
  var l2_1 = []
  var l2_2 = []

  for (var i = 0; i < images.length; i++) {
    if (i % 3 === 0) {
      l3_1.push({ name: images[i], index: i })
    } else if (i % 3 === 1) {
      l3_2.push({ name: images[i], index: i })
    } else {
      l3_3.push({ name: images[i], index: i })
    }

    if (i % 2 === 0) {
      l2_1.push({ name: images[i], index: i })
    } else {
      l2_2.push({ name: images[i], index: i })
    }
  }

  return (
    <>
      <Modal />

      {dimensions.width < SMALL_SCREEN ? (
        <div className="image-gallery-container">
            <ImageGalleryCollumn allImages={images} images={l2_1} />
            <ImageGalleryCollumn allImages={images} images={l2_2} />
        </div>
      ) : (
        <div className="image-gallery-container">
            <ImageGalleryCollumn allImages={images} images={l3_1} />
            <ImageGalleryCollumn allImages={images} images={l3_2} />
            <ImageGalleryCollumn allImages={images} images={l3_3} />
        </div>
      )}
    </>
  )
}

export default ImageGallery
