import React from "react";

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
    <div className={`image-gallery-image  ${isVisible ? "is-visible" : ""} `}>
      <img
        ref={domRef}
        alt={name}
        src={image}
        className="image-gallery-animation"
        style={{
          WebkitAnimationDelay: animationDelay,
          MozAnimationDelay: animationDelay,
          OAnimationDelay: animationDelay,
          animationDelay: animationDelay,
          width: "100%",
        }}
      />
    </div>
  );
}