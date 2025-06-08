import { ContentItemType } from "../../../data/types";
import { Filter } from "./Filter";
import { Search } from "./Search";
import { Sort } from "./Sort";

interface SortFilterSearchProps {
    projectData: ContentItemType[];
    setSortedProjects: (sortedProjects: ContentItemType[]) => void;
}

export const SortFilterSearch = ({
    projectData,
    setSortedProjects,
}: SortFilterSearchProps) => {
    return (
        <div className="sort-filter-search-container">
            <Sort
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