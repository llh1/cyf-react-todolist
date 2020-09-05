import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import shortid from "shortid";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = (value) => {
    const newTodoItem = {
      id: shortid(),
      title: value
    };
    setTodoItems([...todoItems, newTodoItem]);
  };

  const deleteTodoItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };
  
  return (
    <div className="todoapp">
      <Header addTodoItem={addTodoItem} />
      <TodoList items={todoItems} deleteTodoItem={deleteTodoItem} />
    </div>
  );
}
