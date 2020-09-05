import React, { useState } from "react";
import SortButton from "./SortButton";

export default function Header({
  addTodoItem,
  sortingOrder,
  applySortingOrder
}) {
  const [value, setValue] = useState("");

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if(value !== "") {
      addTodoItem(value);
      setValue("");
    }
  }

  return (
    <div>
      <h1>todos</h1>
      <SortButton 
        sortingOrder={sortingOrder}
        applySortingOrder={applySortingOrder} />
      <form onSubmit={handleSubmit}>
          <input
          className="new-todo"
          type="text"
          placeholder="What needs to be done today?"
          autoFocus
          value={value}
          onChange={handleChange}
          />
      </form>
    </div>
  );
}
