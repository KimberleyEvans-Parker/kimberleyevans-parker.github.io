import React from "react";
import { ImageItem } from "./ImageItem";
import { useDispatch } from "react-redux";
import { ModalState } from "../../../redux/state";
import { setImage } from "../../../redux/actions";

type imageData = {name: string, index: number};

interface ImageGalleryCollumnProps {
  allImages: string[];
  images: imageData[];
}

const getIndex = (allImages: string[], name: string) => {
  for (let i = 0; i < allImages.length; i++) {
    let currentImage = allImages[i]
    if (currentImage.includes(name)) return i
  }
  return -1
}

export const ImageGalleryCollumn = ({ allImages, images }: ImageGalleryCollumnProps) => {
  const dispatch = useDispatch();

  const openModal = (name: string) => {
      const imageIndex = getIndex(allImages, name);

      const newModalState: ModalState = {
        images: allImages,
        selectedImage: imageIndex,
        caption: name,
      }
      dispatch(setImage(newModalState))
  }


  return (
    <>
      {images.map((imageData, imageIndex) => {
        const image = imageData.name;
        const animationDelay = imageData.index * 0.15 + "s";
        const path = image.split("/");
        const name = path[path.length - 1].split(".")[0];

        return (
          <button
            onClick={() => openModal(name)}
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
