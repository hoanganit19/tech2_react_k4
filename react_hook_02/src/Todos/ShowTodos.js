import React, { useContext, useEffect } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import TodoItem from "./TodoItem";
//import { fetchTodos } from "../StateProvider/rootReducer";

const ShowTodos = () => {
  const { data, extraDispatch } = useContext(StateContext);

  const { getTodos } = extraDispatch;

  const { todos, todoItem } = data;

  // console.log(todoItem);

  //Nếu làm việc với api => dispatch để StateProvider call api
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <div className="todos-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} {...todo} />
      ))}
      <hr />
      {todoItem.title}
    </div>
  );
};

export default ShowTodos;
