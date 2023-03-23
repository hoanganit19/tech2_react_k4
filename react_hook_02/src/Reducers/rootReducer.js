export const rootReducer = (state, action) => {
  switch (action.type) {
    case "counter/increment":
      return { count: state.count + action.payload };

    case "counter/decrement":
      return { count: state.count - action.payload };

    case "counter/reset":
      return { count: 0 };

    default:
      return state;
  }
};
