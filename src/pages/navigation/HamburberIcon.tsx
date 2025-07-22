import { useEffect, useState } from "react";
import { SMALL_SCREEN } from "../../helpers/Constants";


interface HamburgerIconProps {
    dropdownOpen: boolean;
    setDropdownOpen: (open: boolean) => void;
}

export const HamburgerIcon = ({ dropdownOpen, setDropdownOpen }: HamburgerIconProps) => {
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
            })
        }

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    });

    if (dimensions.width >= SMALL_SCREEN) return null

    return (
        <div
            className={`navbar-rightside`}
            onClick={() => setDropdownOpen(!dropdownOpen)}
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