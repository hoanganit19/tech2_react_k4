import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
  todos: [],
  status: "idle",
};
export const counterSlice = createSlice({
  name: "counter",
  initialState: initialState,
  reducers: {
    increment: (state, action) => {
      state.count += action.payload;
    },
    decrement: (state, action) => {
      state.count -= action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload;
        state.status = "succeeded";
      })
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "pending";
      });
  },
});

export const counterSelector = (state) => state.counter.count;

//Thunk function
export const fetchTodos = createAsyncThunk(
  "counter/fetchTodosStatus",
  async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await res.json();
    return data;
  }
);

//pending
//fulfilled
//reject
