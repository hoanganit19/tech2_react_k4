import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { counterSelector } from "../Redux/Selector/counterSelector";
import { increment, decrement } from "../Redux/Actions/counterActions";
import { testThunk } from "../Redux/Middlewares/fetchTodos";
const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector(counterSelector);

  const handleIncrement = () => {
    dispatch(increment(2));
  };

  const handleDecrement = () => {
    dispatch(decrement(1));
  };

  useEffect(() => {
    dispatch(testThunk());
  }, []);

  const todos = useSelector((state) => state.counter.testTodos);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleDecrement}>-</button>
      <hr />
      {todos.map((todo) => (
        <h3 key={todo.id}>{todo.title}</h3>
      ))}
    </div>
  );
};

export default Counter;
