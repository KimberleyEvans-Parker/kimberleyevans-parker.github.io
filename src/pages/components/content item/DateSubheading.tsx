import { Dates } from "../../../data/types"

export const DateSubheading = (dates: Dates) => {
    return <h3>
        {dates.start.toLocaleDateString(`en-NZ`, { month: `long`, year: `numeric` })}
        {dates.end && dates.end !== `Present` && (
          ` - ${dates.end.toLocaleDateString(`en-NZ`, { month: `long`, year: `numeric` })}`
        )}
        {dates.end === `Present` && (
          ` - Present`
        )}
    </h3>
}