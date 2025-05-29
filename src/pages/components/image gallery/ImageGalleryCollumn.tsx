import { ImageItem } from "./ImageItem"
import { useDispatch } from "react-redux"
import { ModalState } from "../../../redux/state"
import { setImage } from "../../../redux/actions"
import { getImageName, getIndexOfImage } from "../../../helpers/Helpers"

type imageData = {name: string, index: number};

interface ImageGalleryCollumnProps {
  allImages: string[];
  images: imageData[];
}


export const ImageGalleryCollumn = ({ allImages, images }: ImageGalleryCollumnProps) => {
  const dispatch = useDispatch();

  const openModal = (name: string) => {
      const imageIndex = getIndexOfImage(allImages, name);

      const newModalState: ModalState = {
        images: allImages,
        selectedImage: imageIndex,
        captionHeader: "",
      }
      dispatch(setImage(newModalState))
  }


  return (
    <>
      {images.map((imageData, imageIndex) => {
        const image = imageData.name;
        const animationDelay = imageData.index * 0.15 + "s";
        const name = getImageName(image)

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
