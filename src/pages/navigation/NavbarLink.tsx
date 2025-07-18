import { Link, useLocation } from "react-router-dom";

interface NavbarLinkProps {
  heading: string;
  setDropdownOpen: (open: boolean) => void;
  subheadings?: string[];
}

export const NavbarLink = ({ heading, setDropdownOpen, subheadings }: NavbarLinkProps) => {
  const location = useLocation();
  const url = `/${heading.toLowerCase()}`;

  return (
    <>
      <Link
        className="nav-link"
        to={url}
        onClick={() => setDropdownOpen(false)}
      >
        <li
          className={`dropdown-item 
          ${location.pathname.startsWith(url) ? "active" : ""}
          `}
        >
          {heading}
        </li>
      </Link>

      {subheadings && subheadings.map((subheading) => (
        <Link
          key={subheading}
          to={`${url}/${subheading.toLowerCase()}`}
          onClick={() => setDropdownOpen(false)}
        >
          <li
            className={`dropdown-item sub-dropdown-item
          ${location.pathname.startsWith(url) ? "active" : ""}
          `}
          >
            {subheading}
          </li>
        </Link>
      ))}
    </>
  );
}
