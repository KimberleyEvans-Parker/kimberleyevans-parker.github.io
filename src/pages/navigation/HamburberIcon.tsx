import navStyles from "./navigation.module.css"
import menuStyles from "./menu-icon.module.css"

interface HamburgerIconProps {
    dropdownOpen: boolean
    setDropdownOpen: (open: boolean) => void
}

export const HamburgerIcon = ({ dropdownOpen, setDropdownOpen }: HamburgerIconProps) => {
    return (
        <div
            className={`${navStyles['hamburger-icon']} ${navStyles['navbar-rightside']}`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-label="Menu"
        >
            <li>
                <div className={`${dropdownOpen ? menuStyles.change : ""} ${menuStyles['menu-icon']}`}>
                    <div className={menuStyles.bar1}></div>
                    <div className={menuStyles.bar2}></div>
                    <div className={menuStyles.bar3}></div>
                </div>
            </li>
        </div>
    )
}