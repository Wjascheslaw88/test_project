import React from "react";
import classes from "./MyPosts.module.css";
import Post from "./Posts/Post";

const MyPosts = () => {
  return (
    <div>
      <div>My post</div>
      <Post message="Hi,  how are you?" />
      <Post message="It's my first post" />
    </div>
  );
};

export default MyPosts;
