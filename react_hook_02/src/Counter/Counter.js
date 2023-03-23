import React, { useReducer } from "react";
import { rootReducer } from "../Reducers/rootReducer";
import {
  incrementCount,
  decrementCount,
  resetCount,
} from "../Reducers/Actions/counterActions";

const Counter = () => {
  //   const countReducer = (prevState, newState) => {
  //     console.log(prevState, newState);
  //     return newState;
  //   };

  //   const initialValue = 0;

  //   const [count, setCount] = useReducer(countReducer, initialValue);

  const initialState = {
    count: 0,
  };

  const [state, dispatch] = useReducer(rootReducer, initialState);

  const handleIncrement = () => {
    //setCount(count + 1);
    dispatch(incrementCount(3));
    //dispatch(action) => action là 1 object
  };

  const handleDecrement = () => {
    //setCount(count - 1);
    dispatch(decrementCount(2));
  };

  const handleReset = () => {
    dispatch(resetCount());
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default Counter;
