import { Link, useLocation } from "react-router-dom";

export const SubNavbarLink = (props) => {
  const location = useLocation();

  return (
    <Link
      className="nav-link"
      to={`/${props.section}/${props.heading.toLowerCase()}`}
    >
      <li
        className={`${
          location.pathname ===
          `/${props.section}/${props.heading.toLowerCase()}`
            ? "active"
            : ""
        } 
        `}
      >
        {props.heading}
      </li>
    </Link>
  );
}
