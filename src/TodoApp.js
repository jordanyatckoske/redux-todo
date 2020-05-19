import React from "react";
import "./TodoApp.scss";
import AddTodo from "./components/AddTodo";
import TodoList from "./components/TodoList";
import VisibilityFilters from "./components/VisibilityFilters";

export default function TodoApp() {
  return (
    <div className="container">
      <div className="header">
        <h1>Redux Todo List</h1>
      </div>
      <AddTodo />
      <VisibilityFilters />
      <TodoList />
    </div>
  );
}
