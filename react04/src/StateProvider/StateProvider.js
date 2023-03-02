import React from "react";
export const StateContext = React.createContext();

export default class StateProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "Hello",
      todoList: [],
    };
    this.dispatch = {
      setMsg: this.setMsg,
      addTodo: this.addTodo,
    };
  }

  setMsg = (msg) => {
    this.setState({ msg });
  };

  addTodo = (todo) => {};

  render() {
    const { children } = this.props;

    return (
      <StateContext.Provider
        value={{
          data: this.state,
          dispatch: this.dispatch,
        }}
      >
        {children}
      </StateContext.Provider>
    );
  }
}
