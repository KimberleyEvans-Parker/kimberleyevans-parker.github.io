import React, { useState } from "react";

function Modal(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button>
        <img
          src={props.image}
          alt={props.caption}
          onClick={() => setOpen(!open)}
        />
      </button>

      {open && (
        <>
          <div className="modal-background">
            <span className="close" onClick={() => setOpen(!open)}>
              &times;
            </span>
            <img alt={props.caption} src={props.image} className="modal-content" />
            {props.caption && (
              <div className="caption">
                <h2>{props.caption}</h2>
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Modal;
