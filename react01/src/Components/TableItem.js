import React from "react";

const TableItem = ({ no, name, email, phone }) => {
  return (
    <tr>
      <td>#{no}</td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phone}</td>
    </tr>
  );
};

export default TableItem;
