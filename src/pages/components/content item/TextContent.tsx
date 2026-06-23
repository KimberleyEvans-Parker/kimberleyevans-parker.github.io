import { DateSubheading } from "./DateSubheading.tsx"
import { Dates } from "../../../data/types.ts"
import { LinksSection } from "./LinksSection.tsx"
import { LinksType } from "../../../data/types.ts"

interface TextContentProps {
  description: string
  dates?: Dates
  teamSize?: number
  links?: LinksType
  technologies?: any[]
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
  )
}
