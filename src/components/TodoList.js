import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ items, deleteTodoItem }) {
  return (
    <div className="main">
      <ul className="todo-list">
        {items.map(item => (
          <TodoItem id={item.id} title={item.title} deleteTodoItem={deleteTodoItem} />
        ))}
      </ul>
    </div>
  );
}
