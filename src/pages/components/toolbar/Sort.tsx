import React, { useEffect, useState } from "react"
import { ContentItemType } from "../../../data/types";
import "./sort.css";
import { sortByEndDate, sortByName, sortByStartDate, sortByTeamSize, sortByTechnology } from "./SortHelper";


interface SortProps {
    projectData: ContentItemType[];
    setSortedProjects: (sortedProjects: ContentItemType[]) => void;
}

export const Sort = ({projectData, setSortedProjects}: SortProps) => {
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
    
    useEffect(() => {
        if (!projectData) return
        if (projectData.length === 0) return

        if (sortBy === sortingOptions.startDate) {
            projectData.sort(sortByStartDate)
        } else if (sortBy === sortingOptions.endDate) {
            projectData.sort(sortByEndDate)
        } else if (sortBy === sortingOptions.name) {
          projectData.sort(sortByName)
        } else if (sortBy === sortingOptions.teamSize) {
          projectData.sort(sortByTeamSize)
        } else if (sortBy === sortingOptions.technology) {
          projectData.sort(sortByTechnology)
        }

        setSortedProjects([...projectData]);
      }
    , [projectData, sortBy, setSortedProjects, sortingOptions.startDate, sortingOptions.endDate, sortingOptions.name, sortingOptions.teamSize, sortingOptions.technology])

    return (
        <div className="tool-item fade left">
            <label htmlFor="sort">Sort By</label>
            <select id="sort" value={sortBy} onChange={handleSortChange}>
                {Object.values(sortingOptions).map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
        </div>
    )
}
