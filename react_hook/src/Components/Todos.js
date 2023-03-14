import React, { useEffect, useState } from "react";

const Todos = () => {
  const [todoList, setTodo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchTodos = async () => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
    const data = await res.json();
    setTodo(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchTodos();
    console.log("effect");
    return () => {
      console.log("cleanup");
    };
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        todoList.map(({ title, id }) => <h3 key={id}>{title}</h3>)
      )}
    </div>
  );
};

export default Todos;

/*
- dependencies = [] => giống componentDidMount()
- dependencies = null (Không có tham số) => Giống componentDidUpdate() (Chạy ngay từ lần render đầu tiên)
- dependencies = [biến 1, biến 2,...] => Khi biến đó thay đổi => Hàm trong useEffect sẽ chạy
Nếu function trong useEffect return về 1 function => componentWillUnmount()

useEffect(() => {
    //Code xử lý
    return () => {
        //component will unmount, hay còn gọi cleanup
    }
}, [])

*/
