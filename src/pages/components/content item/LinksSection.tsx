import { Link } from "react-router-dom"
import { LinksType } from "../../../data/types"

export const LinksSection = (links? : LinksType) => {
    if (!links) return <></>

    return (
        <>
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
          <Link to={links?.local}>
            See more here
          </Link>
        </p>
      )}
      </>
    )
}