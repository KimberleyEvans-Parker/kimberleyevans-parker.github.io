import { Link } from "react-router-dom";


export const TextContent = (props) => {
  return (
    <>
      <h3>{props.dates}</h3>
      <p>{props.description}</p>
      {props.linkedInLink && (
          <a href={props.linkedInLink} className={"popout-link"}>
            <i className="fa fa-linkedin popout" aria-hidden="true" />
            <p>
              See the LinkedIn post here!
            </p>
          </a>
      )}
      {props.link && (
        <p>
          <a href={props.link}>For more information, take a look here</a>
        </p>
      )}
      {props.projectLink && (
        <p>
          <Link to={`/experience/projects#${props.projectLink}`}>See the project here</Link>
        </p>
        )}
      <div className="technologies">
        {props.technologies && props.technologies.join(` ⸎ `)}
      </div>
    </>
  );
}
