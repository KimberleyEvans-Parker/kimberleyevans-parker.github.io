import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { resetImage } from "../../redux/actions";
import { selectModalCaption, selectModalImages, selectModalSelectedImage } from "../../redux/selectors";
import { Carousel } from "react-responsive-carousel";
import { CAROUSEL_INTERVAL, CAROUSEL_TRANSITION_TIME } from "../../helpers/Constants";
import { getImageName } from "../../helpers/Helpers";


export const Modal = () => {
  const imageIndex = useSelector(selectModalSelectedImage)
  const captionHeader = useSelector(selectModalCaption)
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
            const name = getImageName(image)
            const caption = captionHeader ? captionHeader + " - " + name : name;

            return (<>
              {image.match(/\.(mp4|webm|ogg)$/i) ? (
              <video
                muted
                autoPlay
                loop
                src={image}
                className="modal-image"
              />
            ) : (
              <img alt={caption + name} src={image} className="modal-image" />
            )}
              {caption && (
                <div className="caption">
                  <h2>{caption}</h2>
                </div>
              )}
              </>
            )
          })}
        </Carousel>
      </div>
    </div>
  );
}

