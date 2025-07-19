import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { SMALL_SCREEN } from "../../helpers/Constants";

interface NavbarLinkProps {
  heading: string;
  setDropdownOpen: (open: boolean) => void;
  subheadings?: string[];
}

export const NavbarLink = ({ heading, setDropdownOpen, subheadings }: NavbarLinkProps) => {
  const location = useLocation();
  const url = `/${heading.toLowerCase()}`;
  const [subDropdownOpen, setSubDropdownOpen] = useState(false);
  
    /* Keeps track of the window dimensions.  Updates when window resizes */
    const [dimensions, setDimensions] = useState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    useEffect(() => {
      const handleResize = () => {
        setDimensions({
          height: window.innerHeight,
          width: window.innerWidth,
        });
      }
  
      window.addEventListener("resize", handleResize);
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    });

    const isActive = location.pathname.startsWith(url);

  return (
    <>
      <div className="dropdown-row">
        <Link
          className="nav-link"
          to={url}
          onClick={() => setDropdownOpen(false)}
        >
          <li
            className={`dropdown-item ${isActive ? "active" : ""}`}
          >
            {heading}
          </li>
        </Link>
        {subheadings && subheadings.length > 0 && (dimensions.width < SMALL_SCREEN) && (
          <li
            className={`dropdown-icon ${isActive ? "active" : ""}`}
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setSubDropdownOpen(!subDropdownOpen);
            }}
          >
            <div className={`${subDropdownOpen ? "dropdown-icon-open" : "dropdown-icon-closed"}`}>
              ^
            </div>
          </li >
        )}
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
