interface ModalProps {
  image: string | undefined;
  caption: string;
  setImage: (image: string | undefined) => void;
}

export const Modal = ({image, caption, setImage}: ModalProps) => {
  return (
    <>
      {image && (
        <div className="modal-background">
            <p className="close" onClick={() => setImage(undefined)}>
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

