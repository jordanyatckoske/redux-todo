import React from "react";
import { connect } from "react-redux";
import { getTodosByVisibilityFilter } from "../redux/selectors";
import Todo from "../components/Todo";

const TodoList = ({ todos }) => {
  return (
    <ul className="todo-list">
      {todos && todos.length
        ? todos.map((todo) => {
            return <Todo key={`todo-${todo.id}`} todo={todo} />;
          })
        : "You have completed all of your todos!"}
    </ul>
  );
};

const mapStateToProps = (state) => {
  const { visibilityFilter } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilter);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
