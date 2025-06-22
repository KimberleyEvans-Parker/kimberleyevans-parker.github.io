import React from "react";
import { ContentItemType } from "../../../data/types";
import { Filter } from "./Filter";
import { Search } from "./Search";
import { Sort } from "./Sort";
import "./tool-bar.css";
import { Order } from "./Order";

interface SortFilterSearchProps {
    projectData: ContentItemType[];
    setSortedProjects: (sortedProjects: ContentItemType[]) => void;
}

export const ToolBar = ({
    projectData,
    setSortedProjects,
}: SortFilterSearchProps) => {
  // Keeps track of the window dimensions.  Updates when window resizes
  const [dimensions, setDimensions] = React.useState({
    height: window.innerHeight,
    width: window.innerWidth,
  });
  React.useEffect(() => {
    const handleResize = () => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

    return (
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
    );
}