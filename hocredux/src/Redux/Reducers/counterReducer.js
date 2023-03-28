const initialState = {
  count: 0,
  testTodos: [],
};

export const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case "counter/fetchTodo":
      return { ...state, testTodos: action.payload };

    case "counter/increment":
      return { count: state.count + action.payload };

    case "counter/decrement":
      return { count: state.count - action.payload };

    default:
      // if (!action.type.includes("@@redux")) {
      //   throw new Error(`Invalid action type ${action.type}`);
      // }
      return state;
  }
};
