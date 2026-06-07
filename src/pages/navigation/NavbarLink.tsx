import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { DropdownIcon } from "./DropdownIcon"
import navStyles from "./navigation.module.css"

interface NavbarLinkProps {
  heading: string
  setDropdownOpen: (open: boolean) => void
  subheadings?: string[]
}

export const NavbarLink = ({ heading, setDropdownOpen, subheadings }: NavbarLinkProps) => {
  const location = useLocation()
  const url = `/${heading.toLowerCase()}`
  const isActive = location.pathname.startsWith(url)
  const [subDropdownOpen, setSubDropdownOpen] = useState(false)

  return (
    <>
      <div className={navStyles['dropdown-row']}>
        <Link
          className={navStyles['nav-link']}
          to={url}
          onClick={() => setDropdownOpen(false)}
        >
          <li
            className={`${navStyles['dropdown-item']} ${isActive ? navStyles.active : ''}`}
          >
            <span className={`${subheadings ? navStyles['has-subheadings'] : ''}`}>
              {heading}
            </span>
          </li>
        </Link>
        <DropdownIcon
          isActive={isActive}
          heading={heading}
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
                  className={navStyles['sub-dropdown-item']}
              >
                <li
                    className={`${navStyles['dropdown-item']} ${navStyles['sub-dropdown-item']} ${location.pathname.startsWith(url) ? navStyles.active : ''}`}
                >
                  {subheading}
                </li>
              </Link>
            ))}
          </>
        )
      }
    </>
  )
}
