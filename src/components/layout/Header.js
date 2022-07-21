import React, { Fragment } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import CartButton from "./CartButton";

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1 className={classes.link}>
          <Link to="/">AMERICA BURGERS</Link>
        </h1>
        <nav className={classes.links}>
          <ul>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <CartButton onShowCart={props.onShowCart} />
      </header>
      {props.isImg && (
        <div className={classes["main-image"]}>
          <img
            src="https://imageproxy.wolt.com/venue/5c76a93e9496d6000b673e92/5958cef6-060e-11eb-8859-ae6876f1d620_medium_america168759.jpg?w=1920"
            alt="America Burger!"
          />
        </div>
      )}
    </Fragment>
  );
};

export default Header;
