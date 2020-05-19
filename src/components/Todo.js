import React from "react";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions";

const Todo = ({ todo, toggleTodo }) => {
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? "X " : "O "}
      <span className={todo && todo.completed ? "todo-complete" : ""}>
        {todo.content}
      </span>
    </li>
  );
};

export default connect(null, { toggleTodo })(Todo);
