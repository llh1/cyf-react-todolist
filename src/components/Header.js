import React, { useState } from "react";

export default function Header({ addTodoItem }) {
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
