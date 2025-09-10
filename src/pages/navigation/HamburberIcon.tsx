interface HamburgerIconProps {
    dropdownOpen: boolean
    setDropdownOpen: (open: boolean) => void
}

export const HamburgerIcon = ({ dropdownOpen, setDropdownOpen }: HamburgerIconProps) => {
    return (
        <div
            className={`hamburger-icon navbar-rightside`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            aria-label="Menu"
        >
            <li style={{ height: "100%", paddingBottom: "10.5px" }}>
                <div className={`${dropdownOpen && "change"} menu-icon`}>
                    <div className="bar1"></div>
                    <div className="bar2"></div>
                    <div className="bar3"></div>
                </div>
            </li>
        </div>
    )
}