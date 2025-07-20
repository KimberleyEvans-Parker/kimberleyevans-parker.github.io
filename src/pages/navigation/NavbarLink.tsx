import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DropdownIcon } from "./DropdownIcon";

interface NavbarLinkProps {
  heading: string;
  setDropdownOpen: (open: boolean) => void;
  subheadings?: string[];
}

export const NavbarLink = ({ heading, setDropdownOpen, subheadings }: NavbarLinkProps) => {
  const location = useLocation();
  const url = `/${heading.toLowerCase()}`;
  const isActive = location.pathname.startsWith(url);
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);

  return (
    <>
      <div className="dropdown-row">
        <Link
          className="nav-link"
          to={url}
          onClick={() => setDropdownOpen(false)}
        >
          <li
            className={`dropdown-item ${isActive && "active" }`}
          >
            <span className={`${subheadings && "has-subheadings"}`}>
              {heading}
            </span>
          </li>
        </Link>
        <DropdownIcon
          isActive={isActive}
          subheadings={subheadings}
          subDropdownOpen={subDropdownOpen}
          setSubDropdownOpen={setSubDropdownOpen}
        />
      </div>

      {
        subDropdownOpen && (
          <>
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
        )
      }
    </>
  );
}
