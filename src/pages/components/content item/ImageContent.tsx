import { Carousel } from "react-responsive-carousel";
import { CAROUSEL_TRANSITION_TIME, CAROUSEL_INTERVAL } from "../../../helpers/Constants";

interface ImageContentProps {
  images: string[];
  heading: string;
  openModal: (image: string, caption: string) => void;
}

export const ImageContent = ({images, heading, openModal}: ImageContentProps) => {
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
    >
      {images.map((image: string) => {
        const path = image.split("/");
        const name = path[path.length - 1].split(".")[0];
        const caption = heading ? heading + " - " + name : name;
        return (
          <button
            onClick={() => openModal(image, caption)}
            key={caption}
          >
            <img alt={caption} src={image} />
          </button>
        );
      })}
    </Carousel>
  );
}
