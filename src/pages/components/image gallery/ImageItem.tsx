import React from "react";
import LegoVideo from "../../../assets/hobbies/Lego/Elven Village.mp4";

interface ImageItemProps {
  name: string;
  image: string;
  animationDelay: any;
}

export const ImageItem = ({name, image, animationDelay}: ImageItemProps) => {
  // for loading an image when it scrolls into view

  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef(null);
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    if (domRef.current) {
      const current = domRef.current;
      observer.observe(current);
      return () => observer.unobserve(current);
    }
  }, [isVisible]);
  
  return (
    <div 
      className={`image-gallery-item image-gallery-animation ${isVisible ? "is-visible" : ""} `}
      ref={domRef}
      style={{
        WebkitAnimationDelay: animationDelay,
        MozAnimationDelay: animationDelay,
        OAnimationDelay: animationDelay,
        animationDelay: animationDelay,
      }}
    >
      {image.match(/\.(mp4|webm|ogg)$/i) ? (
        <video
          muted
          autoPlay
          loop
          src={LegoVideo}
          aria-label={name}
          className="image-gallery-image"
        />
      ) : (
        <img
          alt={name}
          src={image}
          className="image-gallery-image"
        />
      )}
    </div>
  );
}