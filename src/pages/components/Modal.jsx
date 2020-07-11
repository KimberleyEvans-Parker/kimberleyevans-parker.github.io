// import React from "react";
import React, { useState } from "react";

function Modal(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <img
        src={props.image}
        alt="Snow"
        className="clickable"
        style={{
          width: "100%",
          maxWidth: "400px",
          // height: "200px",
          zIndex: "200",
        }}
        onClick={() => setOpen(!open)}
      />

      {open && (
        <>
          <div class="modal-background">
            <span class="close" onClick={() => setOpen(!open)}>
              &times;
            </span>
            <img alt="" src={props.image} className="modal-content" />
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
