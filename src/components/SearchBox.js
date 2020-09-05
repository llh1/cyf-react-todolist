import React from "react";
import { FaSearch } from "react-icons/fa";

export default function SearchBox({ applySearchQuery }) {
  const handleChange = (event) => {
    applySearchQuery(event.target.value);
  };

  return (
    <span className="search">
      <input type="text" placeholder="Search a todo item" onChange={handleChange} />
      <span className="icon"><FaSearch /></span>
    </span>
  );
}
