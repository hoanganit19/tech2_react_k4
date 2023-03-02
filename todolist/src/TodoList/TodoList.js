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
      isLoading: true,
      // searchResult: [],
    };
    this.apiUrl = `http://localhost:3004/todos`;
  }

  handleAddTodo = (todo) => {
    // this.setState({
    //   searchResult: [],
    //   todoList: this.state.todoList.concat(todo),
    // });
    this.addTodo(todo);
  };

  handleRemoveTodo = (id) => {
    // const index = this.state.todoList.findIndex((todo) => todo.id === id);
    // const todoList = [...this.state.todoList];
    // todoList.splice(index, 1);
    // this.setState({
    //   todoList: todoList,
    // });
    this.removeTodo(id);
  };

  handleMarkCompleted = (id) => {
    this.markCompleted(id);
  };

  handleSearch = (keyword) => {
    // const todoList = this.state.todoList.filter((todo) => {
    //   return todo.name.toLowerCase().includes(keyword.toLowerCase());
    // });

    // this.setState({
    //   searchResult: todoList,
    // });
    this.searchTodos(keyword);
  };

  //Api: get
  getTodos = async () => {
    const response = await fetch(this.apiUrl);
    console.log(response);
    const data = await response.json();
    this.setState({
      todoList: data,
      isLoading: false,
    });
  };

  //Api: add
  addTodo = async (todo) => {
    const response = await fetch(this.apiUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(todo),
    });
    if (response.ok) {
      //Thêm thành công
      const data = await response.json(); //server sẽ trả về object vừa thêm được
      this.setState({
        todoList: this.state.todoList.concat(data),
      });
    }
  };

  //Api: delete
  removeTodo = async (id) => {
    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      //Cập nhật lại UI
      const data = this.state.todoList.filter((todo) => todo.id !== id);
      this.setState({
        todoList: data,
      });

      toast.success("Xóa công việc thành công");
    } else {
      toast.error("Bạn không thể xóa vào lúc này");
    }
  };

  //Api: markCompleted
  markCompleted = async (id) => {
    const index = this.state.todoList.findIndex((todo) => todo.id === id);
    const todoList = [...this.state.todoList];

    const response = await fetch(`${this.apiUrl}/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ completed: !todoList[index].completed }),
    });

    if (response.ok) {
      if (index !== -1) {
        todoList[index].completed = !todoList[index].completed;
        this.setState({
          todoList: todoList,
        });

        toast.success("Cập nhật thành công");
      }
    }
  };

  //Api: Search
  searchTodos = async (keyword) => {
    const response = await fetch(`${this.apiUrl}?q=${keyword}`);
    if (response.ok) {
      const data = await response.json();
      this.setState({
        todoList: data,
      });
    }
  };

  componentDidMount() {
    this.getTodos();
  }

  render() {
    let { todoList, isLoading } = this.state;

    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-7">
            <div className="todo">
              <h2 className="text-center">Todo App</h2>
              <TodoSearch onSearch={this.handleSearch} />
              <hr />
              {isLoading ? (
                <p>Loading...</p>
              ) : (
                <TodoShow
                  todoList={todoList}
                  onRemoveTodo={this.handleRemoveTodo}
                  onMarkCompleted={this.handleMarkCompleted}
                />
              )}
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
