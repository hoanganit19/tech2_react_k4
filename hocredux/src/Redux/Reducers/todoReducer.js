const initialState = {
  todos: [],
};
export const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case "todo/add":
      return { ...state, todos: state.todos.concat(action.payload) };
    default:
      return state;
  }
};
