import React from "react";

const PostItem = ({ id, title }) => {
  return (
    <div key={id}>
      <h3>{title}</h3>
    </div>
  );
};

export default PostItem;
