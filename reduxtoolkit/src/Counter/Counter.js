import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { counterSlice, counterSelector, fetchTodos } from "./counterSlice";

const { increment, decrement } = counterSlice.actions;

const Counter = () => {
  const count = useSelector(counterSelector);
  const todos = useSelector((state) => state.counter.todos);
  const status = useSelector((state) => state.counter.status);

  const dispatch = useDispatch();

  const handleIncrement = () => {
    dispatch(increment(3));
  };

  const handleDecrement = () => {
    dispatch(decrement(3));
  };

  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      {status !== "idle" &&
        (status == "pending" ? (
          <p>Loading...</p>
        ) : (
          todos.map((todo) => <h3 key={todo.id}>{todo.title}</h3>)
        ))}
    </div>
  );
};

export default Counter;
