import { Link } from "react-router-dom";

interface TextContentProps {
  dates: string;
  description: string;
  teamSize?: number;
  linkedInLink?: string;
  seeMoreLink?: string;
  projectLink?: string;
  technologies?: any[];
}

export const TextContent = (
 {
    dates,
    description,
    teamSize,
    linkedInLink,
    seeMoreLink,
    projectLink,
    technologies,
  } : TextContentProps
) => {
  return (
    <>
      <h3>
        {dates}
      </h3>
      <p>
        {description}
      </p>
      {teamSize && (
        <p>
          Team size: {teamSize}
        </p>
      )}
      {linkedInLink && (
        <a href={linkedInLink} className={"popout-link"}>
          <i className="fa fa-linkedin popout" aria-hidden="true" />
          <p>
            See the LinkedIn post here!
          </p>
        </a>
      )}
      {seeMoreLink && (
        <p>
          <a href={seeMoreLink}>
            For more information, take a look here
          </a>
        </p>
      )}
      {projectLink && (
        <p>
          <Link to={`/experience/projects#${projectLink}`}>
            See the project here
          </Link>
        </p>
      )}
      <div className="technologies">
        {technologies && technologies.join(` ⸎ `)}
      </div>
    </>
  );
}
