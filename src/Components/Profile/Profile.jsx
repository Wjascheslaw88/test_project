import React from "react";
import classes from "./Profile.module.css";

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

      <div>
        my post
        <div>New post</div>
        <div className={classes.profile}>
          <div className={classes.item}>post1</div>

          <div className={classes.item}>post2</div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
