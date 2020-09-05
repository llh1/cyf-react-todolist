import React from "react";
import "./App.css";

export default function App() {
  return (
    <div className="todoapp">
      <div>
        <h1>todos</h1>
        <form>
          <input
            className="new-todo"
            type="text"
            placeholder="What needs to be done today?"
            autoFocus
          />
        </form>
      </div>
      <div className="main">
        <ul className="todo-list">
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>Item 1</label>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
