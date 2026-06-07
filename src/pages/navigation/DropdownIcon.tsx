import navStyles from "./navigation.module.css"

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
            className={`${navStyles['dropdown-icon']} ${isActive ? navStyles.active : ''}`}
            onClick={(e) => {
                e.preventDefault()
                e.stopPropagation()
                setSubDropdownOpen(!subDropdownOpen)
            }}
        >
            <div className={`${subDropdownOpen ? navStyles['dropdown-icon-open'] : navStyles['dropdown-icon-closed']}`}>
                <div className={navStyles.line1}></div>
                <div className={navStyles.line2}></div>
            </div>
        </li >
    )
}