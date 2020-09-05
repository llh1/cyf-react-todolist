import React from "react";
import SearchBox from "./SearchBox";

export default function Footer({
  uncompleteCount,
  filter,
  applyFilter,
  applySearchQuery
}) {
  const handleFilter = (choosenFilter) => {
    applyFilter(choosenFilter);
  };

  return (
    <div className="footer">
      <span className="todo-count">{uncompleteCount} items to complete</span>
      <ul className="filters">
        <li>
          <button
            className={filter === "all" ? "filter-selected" : ""}
            onClick={() => handleFilter("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={filter === "active" ? "filter-selected" : ""}
            onClick={() => handleFilter("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === "completed" ? "filter-selected" : ""}
            onClick={() => handleFilter("completed")}
          >
            Completed
          </button>
        </li>
      </ul>
      <SearchBox applySearchQuery={applySearchQuery} />
    </div>
  );
}
