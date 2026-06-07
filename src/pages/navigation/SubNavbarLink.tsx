import { Link, useLocation } from "react-router-dom"
import navStyles from "./navigation.module.css"

interface SubNavbarLinkProps {
  section?: string
  heading: string
}

export const SubNavbarLink = ({ section, heading }: SubNavbarLinkProps) => {
  const location = useLocation()
  const url = section ? `/${section.toLowerCase()}/${heading.toLowerCase()}` : `/${heading.toLowerCase()}`

  return (
    <Link
      aria-label={heading}
      className={navStyles['nav-link']}
      to={url}
    >
      <li
        className={
          location.pathname.toLocaleLowerCase() === url ? "active" : ""
        } 
      >
        {heading}
      </li>
    </Link>
  )
}
