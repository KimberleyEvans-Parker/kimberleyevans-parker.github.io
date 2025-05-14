import { Link, useLocation } from "react-router-dom";

interface NavbarLinkProps {
  heading: string;
  dropdownOpen: boolean;
  setDropdownOpen: (open: boolean) => void;
}

export const NavbarLink = ({ heading, dropdownOpen, setDropdownOpen }: NavbarLinkProps) => {
  const location = useLocation();
  const url = `/${heading.toLowerCase()}`;

  return (
    <Link
      className="nav-link"
      to={url}
      onClick={() => setDropdownOpen(false)}
    >
      <li
        className={`
          ${dropdownOpen ? "dropdown-open" : ""} 
          ${location.pathname.startsWith(url) ? "active" : ""}
          `}
      >
        {heading}
      </li>
    </Link>
  );
}
