import React from "react"
import { ContentItemType } from "../../../data/types"
import { MEDIUM_SCREEN, X_SMALL_SCREEN } from "../../../helpers/Constants"
import { Filter } from "./Filter"
import { Search } from "./Search"
import { Sort } from "./Sort"
import { Order } from "./Order"
import "./tool-bar.css"

interface SortFilterSearchProps {
    projectData: ContentItemType[]
    setSortedProjects: (sortedProjects: ContentItemType[]) => void
}

export const ToolBar = ({
    projectData,
    setSortedProjects,
}: SortFilterSearchProps) => {
  // Keeps track of the window dimensions.  Updates when window resizes
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  })
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      })
    }

    window.addEventListener("resize", handleResize)
    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

    return (
      dimensions.width > X_SMALL_SCREEN && dimensions.width < MEDIUM_SCREEN ? 
        <div className="tool-bar-container">
          <div>
            <Sort
                projectData={projectData}
                setSortedProjects={setSortedProjects}
            />
            <Order
                projectData={projectData}
                setSortedProjects={setSortedProjects}
            />
          </div>
          <div>
            <Filter
                projectData={projectData}
                setSortedProjects={setSortedProjects}
            />
            <Search
                projectData={projectData}
                setSortedProjects={setSortedProjects}
            />
          </div>
        </div>
        :
        <div className="tool-bar-container">
            <Sort
                projectData={projectData}
                setSortedProjects={setSortedProjects}
            />
            <Order
                projectData={projectData}
                setSortedProjects={setSortedProjects}
            />
            <Filter
                projectData={projectData}
                setSortedProjects={setSortedProjects}
            />
            <Search
                projectData={projectData}
                setSortedProjects={setSortedProjects}
            />
        </div>
    )
}