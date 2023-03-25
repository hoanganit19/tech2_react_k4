import React, { useContext } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import {
  removeTodo,
  completedTodo,
} from "../StateProvider/Actions/todoActions";

const TodoItem = ({ id, name, completed }) => {
  const { data, dispatch } = useContext(StateContext);

  const handleRemove = (id) => {
    if (window.confirm("Are you sure you want to remove")) {
      dispatch(removeTodo(id));
    }
  };

  const handleCompleted = (id) => {
    const todos = data.todos;
    const index = todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      todos[index].completed = !todos[index].completed;
    }

    dispatch(completedTodo(todos));
  };

  return (
    <div className={`todo--item ${completed ? "completed" : ""}`}>
      <input
        type="checkbox"
        onChange={() => {
          handleCompleted(id);
        }}
      />
      <span className="name">{name}</span>
      <span
        className="remove"
        onClick={() => {
          handleRemove(id);
        }}
      >
        &times;
      </span>
    </div>
  );
};

export default TodoItem;
