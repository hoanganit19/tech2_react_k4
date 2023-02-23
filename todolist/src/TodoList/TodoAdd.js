import React, { Component } from "react";
import { v4 as uniqueId } from "uuid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export class TodoAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      doName: "",
    };
  }

  handleAddForm = (e) => {
    e.preventDefault();
    const { doName } = this.state;
    const { onAddTodo } = this.props;

    if (doName.trim() !== "") {
      //Xử lý thêm

      //Tạo 1 object tương ứng với 1 todo
      const todo = {
        id: uniqueId(),
        name: doName,
        completed: false,
      };

      onAddTodo(todo);

      this.setState({
        doName: "",
      });

      toast.success("Thêm công việc thành công");
    } else {
      //Thông báo lỗi
      toast.error("Vui lòng nhập tên công việc");
    }
  };

  handleChangeValue = (e) => {
    this.setState({
      doName: e.target.value,
    });
  };
  render() {
    const { doName } = this.state;

    return (
      <div>
        <form action="" onSubmit={this.handleAddForm}>
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Todo..."
              onChange={this.handleChangeValue}
              value={doName}
            />
            <button type="submit" className="btn btn-primary">
              Add
            </button>
          </div>
        </form>
        <ToastContainer autoClose={1000} />
      </div>
    );
  }
}

export default TodoAdd;
