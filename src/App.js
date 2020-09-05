import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = (value) => {
    setTodoItems([...todoItems, value]);
  };
  
  return (
    <div className="todoapp">
      <Header addTodoItem={addTodoItem} />
      <TodoList items={todoItems} />
    </div>
  );
}
