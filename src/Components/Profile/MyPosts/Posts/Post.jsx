import React from "react";
import classes from "./Post.module.css";

const Post = (props) => {
  return (
    <div className={classes.item}>
      <img
        src="https://cs14.pikabu.ru/post_img/big/2023/02/13/8/1676295806139337963.png"
        alt=""
      />
      {props.message}
      <div>
        <span>like</span>
      </div>
    </div>
  );
};

export default Post;
