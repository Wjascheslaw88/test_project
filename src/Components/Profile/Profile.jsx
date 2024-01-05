import React from "react";
import classes from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
  return (
    <div className={classes.content}>
      <div>
        <img
          src="https://w.forfun.com/fetch/70/703e3aefd9500eff0f63294bc383ac2a.jpeg"
          alt=""
        />
      </div>

      <div>ava + description</div>

      <MyPosts />
    </div>
  );
};

export default Profile;
