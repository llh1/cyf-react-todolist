import React from "react";
import TodoItem from "./TodoItem";

export default function TodoList({ 
  items, 
  deleteTodoItem, 
  completeTodoItem,
  updateTodoItem 
}) {
  return (
    <div className="main">
      <ul className="todo-list">
        {items.map(item => (
          <TodoItem 
            {...item} 
            deleteTodoItem={deleteTodoItem} 
            completeTodo={completeTodoItem}
            updateTodoItem={updateTodoItem} />
        ))}
      </ul>
    </div>
  );
}
