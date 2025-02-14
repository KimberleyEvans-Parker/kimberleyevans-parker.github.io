import React from "react";

export function ImageItem(props) {
  // for loading an image when it scrolls into view
  const [isVisible, setVisible] = React.useState(false);
  const domRef = React.useRef();
  React.useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => setVisible(entry.isIntersecting));
    });
    observer.observe(domRef.current);
    const current = domRef.current;
    return () => observer.unobserve(current);
  }, [isVisible]);

  return (
    <div className={`image-gallery-image  ${isVisible ? "is-visible" : ""} `}>
      <img
        ref={domRef}
        alt={props.name}
        src={props.image}
        className="image-gallery-animation"
        style={{
          WebkitAnimationDelay: props.animationDelay,
          MozAnimationDelay: props.animationDelay,
          OAnimationDelay: props.animationDelay,
          MsAnimationDelay: props.animationDelay,
          AnimationDelay: props.animationDelay,
          width: "100%",
        }} />
    </div>
  );
}
