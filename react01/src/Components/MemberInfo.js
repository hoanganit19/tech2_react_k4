import React from "react";

const MemberInfo = ({ name, email, address, onGetData }) => {
  //console.log(props);

  return (
    <div className="member__info">
      <p>Name: {name}</p>
      <p>Email: {email}</p>
      <p>Address: {address}</p>
      <button
        onClick={() => {
          onGetData("Unicode");
        }}
      >
        Button
      </button>
    </div>
  );
};

MemberInfo.defaultProps = {
  address: "Chưa cập nhật",
};

export default MemberInfo;
