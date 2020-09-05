import React, { useState } from "react";

export default function TodoItem({
  id,
  title,
  completed,
  deleteTodoItem,
  completeTodo,
  updateTodoItem
}) {
  const [editMode, setEditMode] = useState(false);
  const [itemNewValue, setItemNewValue] = useState(title);

  const handleDeleteItem = () => {
    deleteTodoItem(id);
  };

  const handleCompleted = () => {
    completeTodo(id);
  };

  const enableEditMode = () => {
    setEditMode(true);
  }

  const handleUpdateValue = (event) => {
    setItemNewValue(event.target.value);
  };

  const handleUpdateValueSubmit = (event) => {
    event.preventDefault();
    updateTodoItem(id, itemNewValue);
    setEditMode(false);
  }

  return (
    <li className={completed ? "completed" : ""}>
      <div className="view">
      <input
          className="toggle"
          type="checkbox"
          checked={completed}
          onChange={handleCompleted}
        />
        <label onDoubleClick={enableEditMode}>
          {editMode ? (
            <form onSubmit={handleUpdateValueSubmit}>
              <input value={itemNewValue} onChange={handleUpdateValue} autoFocus />
            </form>
          ) : title}
        </label>
        <button className="destroy" onClick={handleDeleteItem} />
      </div>
    </li>
  );
}
