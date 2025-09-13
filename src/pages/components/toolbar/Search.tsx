import React, { useState } from "react"
import { ContentItemType } from "../../../data/types"

interface SearchProps {
    projectData: ContentItemType[]
    setSortedProjects: (sortedProjects: ContentItemType[]) => void
}

export const Search = ({ projectData, setSortedProjects }: SearchProps) => {
    const [query, setQuery] = useState("")

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setQuery(value)
        const filtered = projectData.filter(project =>
            project.heading.toLowerCase().includes(value.toLowerCase())
        )
        setSortedProjects(filtered)
    }

    return (
        <div className="tool-item fade left search-field">
            <label htmlFor="filter">Search</label>
            <input
                type="text"
                placeholder="Search projects..."
                value={query}
                onChange={handleChange}
            />
        </div>
    )
}
