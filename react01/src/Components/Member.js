import React from "react";

const Member = ({ children }) => {
  console.log(children);

  return (
    <div className="member">
      <h2>Thông tin thành viên</h2>
      {children}
    </div>
  );
};

export default Member;

//Import component MemberInfo và Avatar
