import React from "react";
import { FaSort, FaSortAlphaDown, FaSortAlphaUpAlt } from "react-icons/fa";

export default function SortButton({ sortingOrder, applySortingOrder }) {
  const handleClick = (order) => {
    applySortingOrder(order)
  };

  if(!sortingOrder) {
    return (
      <div className="sorting">
        <FaSort onClick={() => handleClick("asc")} />
      </div>
    );
  }

  return (
    <div className="sorting">
      {sortingOrder === "asc" ? 
        <FaSortAlphaDown onClick={() => handleClick("desc")} />
        : <FaSortAlphaUpAlt onClick={() => handleClick("asc")} />
      }
    </div>
  )
}
