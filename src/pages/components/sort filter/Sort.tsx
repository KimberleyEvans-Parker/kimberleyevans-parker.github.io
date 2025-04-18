import React, { useEffect, useState } from "react"
import { ContentItemType } from "../../../data/types";
import "./sort.css";


interface SortI {
    projectData: ContentItemType[];
    setSortedProjects: (sortedProjects: ContentItemType[]) => void;
}

export const Sort = ({projectData, setSortedProjects}: SortI) => {
    const [ascending, setAscending] = useState(true);
    const [sortBy, setSortBy] = useState("date");

    enum sortingOptions {
        date = "date",
        name = "name", 
        technology = "technology",
    }

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = event.target.value
        setSortBy(newSort)
    }

    const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newOrder = event.target.value as "asc" | "desc"
        setAscending(newOrder === "asc")
    }
    
    useEffect(() => {
        if (!projectData) return
        if (projectData.length === 0) return

        if (sortBy ===sortingOptions.date) {
          projectData.sort((a, b) => a.dates.localeCompare(b.dates))
        } else if (sortBy === sortingOptions.name) {
          projectData.sort((a, b) => a.heading.localeCompare(b.heading))
        } else if (sortBy === sortingOptions.technology) {
          projectData.sort((a, b) => {
            if (a.technologies && b.technologies) {
                return b.technologies.length - a.technologies.length
            } else if (a.technologies && !b.technologies) {
                return 1
            } else if (!a.technologies && b.technologies) {
                return -1
            } else {
                return 0
            }
          })
        }

        if (!ascending) {
          projectData.reverse();
        }

        setSortedProjects([...projectData]);
      }
    , [projectData, ascending, sortBy, setSortedProjects])

    return (
        <div className="sort-container">
            <div className="sort-item">
                <label htmlFor="sort">Sort By</label>
                <select id="sort" value={sortBy} onChange={handleSortChange}>
                    {Object.values(sortingOptions).map((option) => (
                        <option key={option} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
            </div>

            <div className="sort-item">
                <label htmlFor="order">Order</label>
                <select id="order" value={ascending ? "asc" : "desc"} onChange={handleOrderChange}>
                    <option value="asc">Ascending</option>
                    <option value="desc">Descending</option>
                </select>
            </div>
        </div>
    )
}
