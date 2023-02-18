import React from "react";
import Member from "./Components/Member";
import MemberInfo from "./Components/MemberInfo";
import Avatar from "./Components/Avatar";
import Posts from "./Components/Posts";

const App = () => {
  const members = {
    info: {
      name: "Hoàng An",
      email: "hoangan.web@gmail.com",
      //   address: "Hà Nội",
    },
    avatar: {
      src: "https://picsum.photos/200",
      width: 200,
      height: 200,
      style: {
        borderRadius: "50%",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
      },
    },
    posts: [
      {
        id: 1,
        title: "Post 1",
      },
      {
        id: 2,
        title: "Post 2",
      },
      {
        id: 3,
        title: "Post 3",
      },
    ],
  };

  const { info, avatar, posts } = members;

  const handleGetData = (data) => {
    console.log(data);
  };

  return (
    <Member>
      <MemberInfo {...info} onGetData={handleGetData} />
      <Avatar {...avatar} />
      <Posts posts={posts} />
    </Member>
  );
};

export default App;
