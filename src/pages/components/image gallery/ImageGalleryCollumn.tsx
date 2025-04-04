import React from "react";
import { ImageItem } from "./ImageItem";

interface ImageGalleryCollumnProps {
  images: any[];
  openModal: (image: any, name: string) => void;
}

export const ImageGalleryCollumn = (props: ImageGalleryCollumnProps) => {
  return (
    <>
      {props.images.map((imageIndex) => {
        const image = imageIndex[0];
        const animationDelay = imageIndex[1] * 0.15 + "s";
        const path = image.split("/");
        const name = path[path.length - 1].split(".")[0];
        console.log("column", image, imageIndex, name);
        return (
          <button
            onClick={() => props.openModal(image, name)}
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
