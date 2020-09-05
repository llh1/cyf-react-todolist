import React from "react";

export default function Footer({ uncompleteCount }) {
  return (
    <div className="footer">
      <span className="todo-count">{uncompleteCount} items to complete</span>
    </div>
  );
}
