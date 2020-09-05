import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import shortid from "shortid";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [filter, setFilter] = useState();

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

  const updateTodoItem = (id, newValue) => {
    const updatedTodos = todoItems.map((todo) => {
      if (todo.id === id) {
        todo.title = newValue;
      }
      return todo;
    });

    setTodoItems(updatedTodos);
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

  const getUncompletedTodoCount = () => {
    const uncompletedTodos = todoItems.filter((todo) => !todo.completed);
    return uncompletedTodos.length;
  };

  const applyFilter = (filter) => {
    setFilter(filter);
  };

  const getFilteredTodos = () => {
    return todoItems.filter((item) => {
      switch (filter) {
        case "active":
          return !item.completed;
        case "completed":
          return item.completed;
        default:
          return item;
      }
    });
  };
  
  return (
    <div className="todoapp">
      <Header addTodoItem={addTodoItem} />
      <TodoList 
        items={getFilteredTodos()} 
        deleteTodoItem={deleteTodoItem} 
        completeTodoItem={completeTodoItem}
        updateTodoItem={updateTodoItem} />
      <Footer 
        uncompleteCount={getUncompletedTodoCount()}
        filter={filter}
        applyFilter={applyFilter} />
    </div>
  );
}
