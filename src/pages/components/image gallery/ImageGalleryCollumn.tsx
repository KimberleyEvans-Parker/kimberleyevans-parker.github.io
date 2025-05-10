import React from "react";
import { ImageItem } from "./ImageItem";
import { useDispatch } from "react-redux";
import { ModalState } from "../../../redux/state";
import { setImage } from "../../../redux/actions";

interface ImageGalleryCollumnProps {
  images: any[];
}

export const ImageGalleryCollumn = ({ images }: ImageGalleryCollumnProps) => {
  const dispatch = useDispatch();
  const openModal = (imageIndex: number, name: string) => {

      const newImagesArray = images.map(imageData => imageData[0])

      const newModalState: ModalState = {
        images: newImagesArray,
        selectedImage: imageIndex,
        caption: name,
      }
      dispatch(setImage(newModalState))
  }


  return (
    <>
      {images.map((imageData, imageIndex) => {
        const image = imageData[0];
        const animationDelay = imageData[1] * 0.15 + "s";
        const path = image.split("/");
        const name = path[path.length - 1].split(".")[0];

        return (
          <button
            onClick={() => openModal(imageIndex, name)}
            key={name}
            className="modal-thumbnail"
          >
            <ImageItem
              name={name}
              image={image}
              animationDelay={animationDelay} />
          </button>
        );
      })}
    </>
  );
}
