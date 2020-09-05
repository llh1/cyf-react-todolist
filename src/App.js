import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import shortid from "shortid";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);

  const addTodoItem = (value) => {
    const newTodoItem = {
      id: shortid(),
      title: value,
      completed: false
    };
    setTodoItems([...todoItems, newTodoItem]);
  };

  const deleteTodoItem = (id) => {
    const newTodoItems = todoItems.filter((item) => item.id !== id);
    setTodoItems(newTodoItems);
  };

  const completeTodoItem = (id) => {
    const updatedTodos = todoItems.map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodoItems(updatedTodos);
  };
  
  return (
    <div className="todoapp">
      <Header addTodoItem={addTodoItem} />
      <TodoList items={todoItems} 
        deleteTodoItem={deleteTodoItem} 
        completeTodoItem={completeTodoItem} />
    </div>
  );
}
