import React, { Component } from "react";
import clsx from "clsx";

export class TodoShow extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { todoList, onRemoveTodo, onMarkCompleted } = this.props;
    return (
      <div className="todo__content">
        {todoList.map(({ id, name, completed }) => (
          <div
            className={clsx("todo--item", completed && "completed")}
            key={id}
          >
            <span>
              <input
                type="checkbox"
                checked={completed}
                onChange={() => {
                  onMarkCompleted(id);
                }}
              />
            </span>
            <span>{name}</span>
            <span
              onClick={() => {
                if (window.confirm("Bạn có chắc chắn?")) {
                  onRemoveTodo(id);
                }
              }}
              className="remove"
            >
              &times;
            </span>
          </div>
        ))}
      </div>
    );
  }
}

export default TodoShow;
