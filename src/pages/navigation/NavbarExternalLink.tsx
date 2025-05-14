import { Link, useLocation } from "react-router-dom";

interface NavbarExternalLinkProps {
  url: string;
  ariaLabel: string;
  className: string;
  setDropdownOpen: (open: boolean) => void;
}

export const NavbarExternalLink = ({ url, ariaLabel, className, setDropdownOpen }: NavbarExternalLinkProps) => {
  const location = useLocation();

  return (
    <a
      href={url}
      onClick={() => setDropdownOpen(false)}
      aria-label={ariaLabel}
    >
      <li className="dropdown-item">
        <i className={`fa ${className}`} aria-hidden="true"></i>
      </li>
    </a>
  );
}
