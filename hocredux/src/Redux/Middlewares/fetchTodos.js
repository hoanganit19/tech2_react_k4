//Redux Middleware
export const testThunk = () => {
  return async (dispatch, getState) => {
    //console.log(dispatch);
    //console.log(getState());
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const todos = await res.json();

    dispatch({
      type: "counter/fetchTodo",
      payload: todos,
    });
  };
};
