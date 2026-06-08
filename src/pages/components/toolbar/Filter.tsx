import React, { useState } from "react"

import { ContentItemType } from "../../../data/types"
import { TECHNOLOGIES } from "../../../helpers/Constants"
import styles from "./filter.module.css"

interface FilterProps {
    projectData: ContentItemType[]
    setSortedProjects: (sortedProjects: ContentItemType[]) => void
}

export const Filter = ({ projectData, setSortedProjects }: FilterProps) => {
    const [input, setInput] = useState("")
    const [open, setOpen] = useState(false)

    const filterOptions = Object.values(TECHNOLOGIES).filter((tech) =>
        tech.toLowerCase().includes(input.toLowerCase())
    )

    const handleSelect = (tech: string) => {
        setInput(tech)
        setOpen(false)
        const filteredProjects = projectData.filter((project) =>
            project.technologies?.includes(tech)
        )
        setSortedProjects(filteredProjects)
    }

    const handleBlur = () => {
        setOpen(false)
        if (!Object.values(TECHNOLOGIES).includes(input)) {
            setInput("")
            setSortedProjects(projectData)
        }
    }

    return (
        <div className="tool-item fade left">
            <label htmlFor="filter">Filter By</label>
            <div>
                <input
                    id="filter"
                    type="text"
                    value={input}
                    placeholder="Select technology..."
                    onChange={(e) => {
                        setInput(e.target.value)
                        setOpen(true)
                    }}
                    onFocus={() => setOpen(true)}
                    onBlur={() => handleBlur()}
                />
                {open && (
                    <ul
                        className={styles['filter-list']}
                    >
                        {filterOptions.length === 0 && (
                            <li>No technologies found</li>
                        )}
                        {filterOptions.map((tech) => (
                            <li
                                key={tech}
                                onMouseDown={() => handleSelect(tech)}
                            >
                                {tech}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    )
}
