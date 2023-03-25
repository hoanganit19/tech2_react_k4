import React from "react";
import AddTodo from "./AddTodo";
import ShowTodos from "./ShowTodos";
import "./Todos.css";

const Todos = () => {
  return (
    <div className="todos">
      <h2>Todo App</h2>
      <ShowTodos />
      <hr />
      <AddTodo />
    </div>
  );
};

export default Todos;
