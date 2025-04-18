import React from "react"
import "./sort.css";


interface SortI {
    ascending: boolean;
    sortBy: string;
    setAscending: (ascending: boolean) => void;
    setSortBy: (sortBy: string) => void;
}

export const Sort = ({ascending, sortBy, setAscending, setSortBy}: SortI) => {
    enum sortingOptions {
        "date",
        "name", 
        "technology"
    }

    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = event.target.value
        setSortBy(newSort)
    }

    const handleOrderChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newOrder = event.target.value as "asc" | "desc"
        setAscending(newOrder === "asc")
    }

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
