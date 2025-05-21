import { Link } from "react-router-dom";
import { Dates } from "../../../data/types";
import { DateSubheading } from "./DateSubheading";
import { LinksType } from "../../../data/types";

interface TextContentProps {
  dates: Dates;
  description: string;
  teamSize?: number;
  links?: LinksType;
  technologies?: any[];
}

export const TextContent = (
 {
    dates,
    description,
    teamSize,
    links,
    technologies,
  } : TextContentProps
) => {
  return (
    <>
      <DateSubheading {...dates} />
      <p>
        {description}
      </p>
      {teamSize && (
        <p>
          Team size: {teamSize}
        </p>
      )}
      {links?.linkedIn && (
        <a href={links?.linkedIn} className={"popout-link"}>
          <i className="fa fa-linkedin popout" aria-hidden="true" />
          <p>
            See the LinkedIn post here!
          </p>
        </a>
      )}
      {links?.seeMore && (
        <p>
          <a href={links?.seeMore}>
            For more information, take a look here
          </a>
        </p>
      )}
      {links?.project && (
        <p>
          <Link to={`/experience/projects#${links?.project}`}>
            See the project here
          </Link>
        </p>
      )}
      {links?.local && (
        <p>
          <Link to={`/experience/projects#${links?.local}`}>
            See more here
          </Link>
        </p>
      )}
      <div className="technologies">
        {technologies && technologies.join(` ⸎ `)}
      </div>
    </>
  );
}
