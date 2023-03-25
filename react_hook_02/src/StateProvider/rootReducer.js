export const initialState = {
  msg: "Unicode Academy",
  todos: [],
  todoItem: {},
};

export const rootReducer = (state, action) => {
  switch (action.type) {
    case "message/set":
      return { msg: action.payload };

    case "todos/add":
      return { ...state, todos: state.todos.concat(action.payload) };

    case "todos/remove":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "todos/completed":
      return {
        ...state,
        todos: action.payload,
      };

    case "todos/fetchTodoItem":
      return { ...state, todoItem: action.payload };

    default:
      return state;
  }
};

// export const fetchTodos = async () => {
//   console.log("Fetching");
//   //Gọi hàm fetch đẻ call api
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
//   const todos = await res.json();
//   console.log(todos);
// };

//Gặp vấn đề: Không thể dispatch lên rootReducer
