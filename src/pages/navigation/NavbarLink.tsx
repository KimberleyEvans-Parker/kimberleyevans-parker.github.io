import { Link, useLocation } from "react-router-dom";

interface NavbarLinkProps {
  heading: string;
  setDropdownOpen: (open: boolean) => void;
}

export const NavbarLink = ({ heading, setDropdownOpen }: NavbarLinkProps) => {
  const location = useLocation();
  const url = `/${heading.toLowerCase()}`;

  return (
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
  );
}
