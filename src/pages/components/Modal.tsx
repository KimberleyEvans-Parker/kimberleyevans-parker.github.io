import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetImage } from "../../redux/actions";
import { selectModalCaption, selectModalImages, selectModalSelectedImage } from "../../redux/selectors";
import { Carousel } from "react-responsive-carousel";
import { CAROUSEL_INTERVAL, CAROUSEL_TRANSITION_TIME } from "../../helpers/Constants";


export const Modal = () => {
  const imageIndex = useSelector(selectModalSelectedImage)
  const caption = useSelector(selectModalCaption)
  const images = useSelector(selectModalImages)

  const image = images && imageIndex !== undefined ? images[imageIndex] : undefined
  const dispatch = useDispatch();

  const handleResetImage = () => {
    dispatch(resetImage());
  };

  if (!image) return <></>
  if (!images) return <></>
  if (images.length === 0) return <></>

  return (
    <div className="modal-background">
      <p className="close" onClick={handleResetImage}>
        &times;
      </p>
      <div className="modal-content">
        <Carousel
          showIndicators={images.length > 1}
          showStatus={images.length > 1}
          showThumbs={false}
          transitionTime={CAROUSEL_TRANSITION_TIME}
          interval={CAROUSEL_INTERVAL}
          infiniteLoop={true}
          className="shadow"
          selectedItem={imageIndex}
          width={"100vw"}
        >
          {images.map((image: string) => {
            const path = image.split("/");
            const name = path[path.length - 1].split(".")[0];
            return (
              <img alt={caption + name} src={image} className="modal-image" />
            );
          })}
        </Carousel>
      </div>
      {caption && (
        <div className="caption">
          <h2>{caption}</h2>
        </div>
      )}
    </div>
  );
}

