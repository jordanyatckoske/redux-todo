import React, { useState } from "react";
import { connect } from "react-redux";
import { addTodo } from "../redux/actions";

const AddTodo = ({ addTodo }) => {
  const [todoText, setTodoText] = useState("");

  const handleAddTodo = () => {
    addTodo(todoText);
    setTodoText("");
  };

  return (
    <div className="input-wrapper">
      <input
        type="text"
        placeholder="Add something to do!"
        onChange={(e) => setTodoText(e.target.value)}
        value={todoText}
      />
      <button onClick={handleAddTodo}>Add to the list!</button>
    </div>
  );
};

export default connect(null, { addTodo })(AddTodo);
