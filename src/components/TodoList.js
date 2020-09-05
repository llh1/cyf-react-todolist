import React from "react";

export default function TodoList({ items }) {
  return (
    <div className="main">
      <ul className="todo-list">
        {items.map(item => (
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>{item}</label>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
