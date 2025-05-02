import React, { useEffect, useState } from "react"
import { ContentItemType } from "../../../data/types";
import "./sort.css";


interface SortProps {
    projectData: ContentItemType[];
    setSortedProjects: (sortedProjects: ContentItemType[]) => void;
}

export const Sort = ({projectData, setSortedProjects}: SortProps) => {
    const [ascending, setAscending] = useState(true);
    const [sortBy, setSortBy] = useState("date");

    enum sortingOptions {
        startDate = "Start Date",
        endDate = "End Date",
        name = "Name", 
        teamSize = "Team Size",
        technology = "Technology",
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

        if (sortBy ===sortingOptions.startDate) {
            projectData.sort((a, b) => {
                if (a.dates.start && b.dates.start) {
                    return a.dates.start.getTime() - b.dates.start.getTime()
                } else if (a.dates.start && !b.dates.start) {
                    return 1
                } else if (!a.dates.start && b.dates.start) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (sortBy === sortingOptions.endDate) {
            projectData.sort((a, b) => {
                if (a.dates.end === "Present" && b.dates.end === "Present") {
                    return 0
                } else if (a.dates.end === "Present") {
                    return -1
                }
                else if (b.dates.end === "Present") {
                    return 1
                }
                const aDate = a.dates.end || a.dates.start
                const bDate = b.dates.end || b.dates.start
                if (aDate && bDate) {
                    return aDate.getTime() - bDate.getTime()
                } else if (aDate && !bDate) {
                    return 1
                } else if (!aDate && bDate) {
                    return -1
                } else {
                    return 0
                }
            })
        } else if (sortBy === sortingOptions.name) {
          projectData.sort((a, b) => a.heading.localeCompare(b.heading))
        } else if (sortBy === sortingOptions.teamSize) {
          projectData.sort((a, b) => {
            if (a.teamSize && b.teamSize) {
                return b.teamSize - a.teamSize
            } else if (a.teamSize && !b.teamSize) {
                return 1
            } else if (!a.teamSize && b.teamSize) {
                return -1
            } else {
                return 0
            }
          })
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
    , [projectData, ascending, sortBy, setSortedProjects, sortingOptions.startDate, sortingOptions.endDate, sortingOptions.name, sortingOptions.teamSize, sortingOptions.technology])

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
