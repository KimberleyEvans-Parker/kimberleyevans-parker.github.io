import { Carousel } from "react-responsive-carousel";
import { CAROUSEL_TRANSITION_TIME, CAROUSEL_INTERVAL } from "../../../helpers/Constants";

export const ImageContent = (props) => {
  return (
    <Carousel
      autoPlay
      showIndicators={props.images.length > 1}
      showStatus={props.images.length > 1}
      showThumbs={false}
      transitionTime={CAROUSEL_TRANSITION_TIME}
      interval={CAROUSEL_INTERVAL}
      infiniteLoop={true}
      className="shadow"
    >
      {props.images.map((image) => {
        const path = image.split("/");
        const name = path[path.length - 1].split(".")[0];
        const caption = props.heading ? props.heading + " - " + name : name;
        return (
          <button
            onClick={() => props.openModal(image, caption)}
            key={caption}
          >
            <img alt={caption} src={image} />
          </button>
        );
      })}
    </Carousel>
  );
}
