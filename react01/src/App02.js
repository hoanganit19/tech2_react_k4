import React, { Fragment } from "react";
import TableItem from "./Components/TableItem";

const App = () => {
  const users = [
    {
      id: 1,
      name: "Nguyễn Văn A",
      email: "nguyenvana@gmail.com",
      phone: "0388875179",
    },
    {
      id: 2,
      name: "Nguyễn Văn B",
      email: "nguyenvanb@gmail.com",
      phone: "0388875179",
    },
    {
      id: 3,
      name: "Nguyễn Văn C",
      email: "nguyenvanc@gmail.com",
      phone: "0388875179",
    },
  ];

  //   const userRender = users.map(({ id, name }) => {
  //     return <p key={id}>{name}</p>;
  //   });

  //   const userRender = [];

  //   users.forEach((user) => {
  //     userRender.push(<p key={user.id}>{user.name}</p>);
  //   });

  //   console.log(userRender);

  return (
    <table border="1" width="100%">
      <thead>
        <tr>
          <th>STT</th>
          <th>Tên</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, index) => (
          <Fragment key={user.id}>
            <TableItem no={index + 1} {...user} />
            <TableItem no={index + 1} {...user} />
          </Fragment>
        ))}
      </tbody>
    </table>
  );
};

export default App;

/*
React JS sẽ đọc mảng và tự convert
*/
