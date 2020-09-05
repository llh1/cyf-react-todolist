import React from "react";

export default function TodoItem({ id, title, deleteTodoItem }) {
  const handleDeleteItem = () => {
    deleteTodoItem(id);
  };

  return (
    <li>
      <div className="view">
        <input className="toggle" type="checkbox" />
        <label>{title}</label>
        <button className="destroy" onClick={handleDeleteItem} />
      </div>
    </li>
  );
}
