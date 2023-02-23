import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Todo.scss";
import TodoAdd from "./TodoAdd";
import TodoShow from "./TodoShow";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TodoSearch from "./TodoSearch";

export class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      todoList: [],
      searchResult: [],
    };
  }

  handleAddTodo = (todo) => {
    this.setState({
      searchResult: [],
      todoList: this.state.todoList.concat(todo),
    });
  };

  handleRemoveTodo = (id) => {
    const data = this.state.todoList.filter((todo) => todo.id !== id);
    this.setState({
      todoList: data,
      searchResult: [],
    });

    toast.success("Xóa công việc thành công");

    // const index = this.state.todoList.findIndex((todo) => todo.id === id);
    // const todoList = [...this.state.todoList];
    // todoList.splice(index, 1);
    // this.setState({
    //   todoList: todoList,
    // });
  };

  handleMarkCompleted = (id) => {
    const index = this.state.todoList.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      const todoList = [...this.state.todoList];
      todoList[index].completed = !todoList[index].completed;
      this.setState({
        todoList: todoList,
        searchResult: [],
      });
      toast.success("Cập nhật thành công");
    }
  };

  handleSearch = (keyword) => {
    const todoList = this.state.todoList.filter((todo) => {
      return todo.name.toLowerCase().includes(keyword.toLowerCase());
    });

    this.setState({
      searchResult: todoList,
    });
  };

  getTodos = async () => {
    const response = await fetch("http://localhost:3004/todos");
    console.log(response);
    const data = await response.json();
    this.setState({
      todoList: data,
    });
  };

  componentDidMount() {
    this.getTodos();
  }

  render() {
    let { todoList, searchResult } = this.state;
    if (searchResult.length) {
      todoList = searchResult;
    }

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7">
            <div className="todo">
              <h2 className="text-center">Todo App</h2>
              <TodoSearch onSearch={this.handleSearch} />
              <hr />
              <TodoShow
                todoList={todoList}
                onRemoveTodo={this.handleRemoveTodo}
                onMarkCompleted={this.handleMarkCompleted}
              />
              <TodoAdd onAddTodo={this.handleAddTodo} />
            </div>
          </div>
        </div>
        <ToastContainer autoClose={1000} />
      </div>
    );
  }
}

export default TodoList;

//Cấu trúc api url
//server_api+endpoint
