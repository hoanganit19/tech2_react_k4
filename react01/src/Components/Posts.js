import React from "react";
import PostItem from "./PostItem";

const Posts = ({ posts }) => {
  return (
    <div>
      <h2>Posts</h2>
      {posts.map((post) => (
        <PostItem key={post.id} {...post} />
      ))}
    </div>
  );
};

export default Posts;
