export const incrementCount = (step) => ({
  type: "counter/increment",
  payload: step,
});

export const decrementCount = (step) => ({
  type: "counter/decrement",
  payload: step,
});

export const resetCount = () => ({
  type: "counter/reset",
});
