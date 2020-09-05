import React from "react";

export default function TodoItem({ id, title, completed, deleteTodoItem, completeTodo }) {
  const handleDeleteItem = () => {
    deleteTodoItem(id);
  };

  const handleCompleted = () => {
    completeTodo(id);
  };

  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
      <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleCompleted}
        />
        <label>{title}</label>
        <button className="destroy" onClick={handleDeleteItem} />
      </div>
    </li>
  );
}
