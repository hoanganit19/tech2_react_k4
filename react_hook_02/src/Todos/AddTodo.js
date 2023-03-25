import React, { useContext, useState } from "react";
import { StateContext } from "../StateProvider/StateProvider";
import { addTodo } from "../StateProvider/Actions/todoActions";

const AddTodo = () => {
  const [doName, setDoName] = useState("");

  const { dispatch, extraDispatch } = useContext(StateContext);

  const { addTodoFetch } = extraDispatch;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (doName.trim().length == 0) {
      alert("Please enter a name");
      return;
    }

    const todo = {
      id: Math.random(),
      name: doName,
      completed: false,
    };

    dispatch(addTodo(todo));

    addTodoFetch("abc");

    setDoName("");
  };

  const handleChange = (e) => {
    setDoName(e.target.value);
  };

  return (
    <div>
      <form action="" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name..."
          onChange={handleChange}
          value={doName}
        />
      </form>
    </div>
  );
};

export default AddTodo;
