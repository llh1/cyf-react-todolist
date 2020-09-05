import React, { useState } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Footer from "./components/Footer";
import shortid from "shortid";

export default function App() {
  const [todoItems, setTodoItems] = useState([]);
  const [filter, setFilter] = useState();
  const [sortingOrder, setSortingOrder] = useState();
  const [searchQuery, setSearchQuery] = useState("");

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

  const applySortingOrder = (sortingOrder) => {
    setSortingOrder(sortingOrder);
  };

  const applySearchQuery = (query) => {
    setSearchQuery(query);
  };

  const getFilteredTodos = (items) => {
    return items.filter((item) => {
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

  const getSortedTodos = (items) => {
    if(!sortingOrder) return items;
    return items.sort((a,b) => {
      if (sortingOrder === "asc") {
        return a.title < b.title ? -1 : 1;
      }
      return a.title > b.title ? -1 : 1;
    });
  };

  const searchItems = (items) => {
    return items.filter(item => item.title.startsWith(searchQuery));
  };

  const getTodos = () => {
    const foundItems = searchItems(todoItems);
    const filteredTodos = getFilteredTodos(foundItems);
    return getSortedTodos(filteredTodos);
  };
  
  return (
    <div className="todoapp">
      <Header 
        addTodoItem={addTodoItem}
        sortingOrder={sortingOrder}
        applySortingOrder={applySortingOrder} />
      <TodoList 
        items={getTodos()} 
        deleteTodoItem={deleteTodoItem} 
        completeTodoItem={completeTodoItem}
        updateTodoItem={updateTodoItem} />
      <Footer 
        uncompleteCount={getUncompletedTodoCount()}
        filter={filter}
        applyFilter={applyFilter}
        applySearchQuery={applySearchQuery} />
    </div>
  );
}
