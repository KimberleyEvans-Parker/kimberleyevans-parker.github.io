import { Dates } from "../../../data/types";
import { DateSubheading } from "./DateSubheading";
import { LinksType } from "../../../data/types";
import { LinksSection } from "./LinksSection";

interface TextContentProps {
  description: string;
  dates?: Dates;
  teamSize?: number;
  links?: LinksType;
  technologies?: any[];
}

export const TextContent = (
  {
    description,
    dates,
    teamSize,
    links,
    technologies,
  }: TextContentProps
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

      <LinksSection {...links} />

      <div className="technologies">
        {technologies && technologies.join(` ⸎ `)}
      </div>
    </>
  );
}
