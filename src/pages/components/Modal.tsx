import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetImage } from "../../redux/actions";
import { selectModalCaption, selectModalImages, selectModalSelectedImage } from "../../redux/selectors";


export const Modal = () => {
  const imageIndex = useSelector(selectModalSelectedImage)
  const caption = useSelector(selectModalCaption)
  const images = useSelector(selectModalImages)
  console.log("Modal", imageIndex, caption, images)
  const image = images && imageIndex !== undefined ? images[imageIndex] : undefined
  const dispatch = useDispatch();

  const handleResetImage = () => {
    dispatch(resetImage());
  };

  console.log("Modal image", image)
  console.log("Modal caption", caption)
  console.log("Image index", imageIndex)

  return (
    <>
      {image && (
        <div className="modal-background">
            <p className="close" onClick={handleResetImage}>
              &times;
            </p>
          <div className="modal-content">
            <img alt="" src={image} className="modal-image" />
            </div>
            {caption && (
              <div className="caption">
                <h2>{caption}</h2>
              </div>
            )}
        </div>
      )}
    </>
  );
}

