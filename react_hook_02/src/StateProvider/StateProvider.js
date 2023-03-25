import React, { createContext, useReducer } from "react";

import { rootReducer, initialState } from "./rootReducer";

export const StateContext = createContext();

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(rootReducer, initialState);

  const getTodos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const todos = await res.json();
    dispatch({
      type: "todos/fetchTodoItem",
      payload: todos,
    });
  };

  const addTodoFetch = async (todo) => {
    //call api
    console.log("call api add to do");
    //dispatch tới rootReducer => update state => re-render các component
  };

  const extraDispatch = {
    getTodos,
    addTodoFetch,
  };

  return (
    <StateContext.Provider
      value={{
        data: state,
        dispatch: dispatch,
        extraDispatch: extraDispatch,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export default StateProvider;
