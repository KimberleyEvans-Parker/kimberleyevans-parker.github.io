import React from "react";

export function TextContent(props) {
  return (
    <>
      <h3>{props.dates}</h3>
      <p>{props.description}</p>
      {props.link && (
        <p>
          For more information, take a look <a href={props.link}>here</a>
        </p>
      )}
      <div className="technologies">
        {props.technologies && props.technologies.join(` ⸎ `)}
      </div>
    </>
  );
}
