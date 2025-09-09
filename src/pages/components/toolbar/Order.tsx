import React, { useEffect, useState } from "react"
import { ContentItemType } from "../../../data/types"
import "./sort.css"


interface OrderProps {
    projectData: ContentItemType[]
    setSortedProjects: (sortedProjects: ContentItemType[]) => void
}

export const Order = ({projectData, setSortedProjects}: OrderProps) => {
    const [ascending, setAscending] = useState(true)

    const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newOrder = event.target.value as "asc" | "desc"
        setAscending(newOrder === "asc")
    }
    
    useEffect(() => {
        if (!projectData) return
        if (projectData.length === 0) return

        if (!ascending) {
          projectData.reverse()
        }

        setSortedProjects([...projectData])
      }
    , [projectData, ascending, setSortedProjects])

    return (
        <div className="tool-item fade left">
            <label htmlFor="order">Order</label>
            <select 
                id="order" 
                value={ascending ? "asc" : "desc"} 
                onChange={handleOrderChange}
                style={{ width: "100px" }}
            >
                <option value="asc">Ascending</option>
                <option value="desc">Descending</option>
            </select>
        </div>
    )
}
