import { Link, useLocation } from "react-router-dom";

interface SubNavbarLinkProps {
  section?: string;
  heading: string;
}

export const SubNavbarLink = ({ section, heading }: SubNavbarLinkProps) => {
  const location = useLocation();
  const url = section ? `/${section}/${heading.toLowerCase()}` : `/${heading.toLowerCase()}`

  return (
    <Link
      className="nav-link"
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
  );
}
