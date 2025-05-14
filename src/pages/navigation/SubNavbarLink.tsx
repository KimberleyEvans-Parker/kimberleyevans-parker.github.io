import { Link, useLocation } from "react-router-dom";

interface SubNavbarLinkProps {
  section: string;
  heading: string;
}

export const SubNavbarLink = ({ section, heading }: SubNavbarLinkProps) => {
  const location = useLocation();

  return (
    <Link
      className="nav-link"
      to={`/${section}/${heading.toLowerCase()}`}
    >
      <li
        className={`${
          location.pathname ===
          `/${section}/${heading.toLowerCase()}`
            ? "active"
            : ""
        } 
        `}
      >
        {heading}
      </li>
    </Link>
  );
}
