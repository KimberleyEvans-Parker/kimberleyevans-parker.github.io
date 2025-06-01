import React, { useState } from "react";

import { TECHNOLOGIES } from "../../../helpers/Constants";
import { ContentItemType } from "../../../data/types";

import "./filter.css";

interface FilterProps {
    projectData: ContentItemType[];
    setSortedProjects: (sortedProjects: ContentItemType[]) => void;
}

const Filter = ({projectData, setSortedProjects}: FilterProps) => {
    const [input, setInput] = useState("");
    const [open, setOpen] = useState(false);

    const filtered = Object.values(TECHNOLOGIES).filter((tech) =>
        tech.toLowerCase().includes(input.toLowerCase())
    );

    const handleSelect = (tech: string) => {
        setInput(tech);
        setOpen(false);
        const filteredProjects = projectData.filter((project) =>
            project.technologies?.includes(tech)
        );
        setSortedProjects(filteredProjects);
    };

    return (
        <div className="filter-container fade left">
            <label htmlFor="filter">Filter By</label>
            <div>
            <input
                id="filter"
                type="text"
                value={input}
                placeholder="Select technology..."
                onChange={(e) => {
                    setInput(e.target.value);
                    setOpen(true);
                }}
                onFocus={() => setOpen(true)}
            />
            {open && (
                <ul
                    className="filter-list"
                >
                    {filtered.length === 0 && (
                        <li>No technologies found</li>
                    )}
                    {filtered.map((tech) => (
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
    );
};

export default Filter;