import { Link, withRouter } from "react-router-dom";

export const SubNavbarLink = withRouter((props) => {
  return (
    <Link
      className="nav-link"
      to={`/${props.section}/${props.heading.toLowerCase()}`}
    >
      <li
        className={`${
          props.location.pathname ===
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
})
