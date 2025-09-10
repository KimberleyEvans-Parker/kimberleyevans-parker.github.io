interface DropdownIconProps {
    isActive?: boolean
    heading: string
    subheadings?: string[]
    subDropdownOpen: boolean
    setSubDropdownOpen: (open: boolean) => void
}

export const DropdownIcon = ({ isActive, heading, subheadings, subDropdownOpen, setSubDropdownOpen }: DropdownIconProps) => {
    if (!subheadings) return null
    if (!subheadings.length) return null

    return (
        <li
            aria-label={`Toggle ${heading} submenu`}
            className={`dropdown-icon ${isActive ? "active" : ""}`}
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setSubDropdownOpen(!subDropdownOpen)
            }}
        >
            <div className={`${subDropdownOpen ? "dropdown-icon-open" : "dropdown-icon-closed"}`}>
                <div className="line1"></div>
                <div className="line2"></div>
            </div>
        </li >
    )
}