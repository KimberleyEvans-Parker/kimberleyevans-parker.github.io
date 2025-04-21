import { Link, useNavigate, useLocation } from "react-router-dom";

export const SubNavbarLink = (props) => {
  const navigate = useNavigate()
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
