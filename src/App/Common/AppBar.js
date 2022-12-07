import React, { Fragment } from "react";
import classes from "./AppBar.module.css";
import images from "../Assets/images.jpg";

const AppBar = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>
          <i>Welcome</i>
        </h1>
        {/* <HeaderCartButton onClick={props.onShowCart} /> */}
      </header>
      <div className={classes["main-image"]}>
        {/* <img src={images} alt="background-img"></img> */}
      </div>
    </Fragment>
  );
};

export default AppBar;
