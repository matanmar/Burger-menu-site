import React from "react";
import classes from "./Contact.module.css";

const Contact = () => {
  return (
    <div className={classes.summary}>
      <section>
        <h2> Opening hours</h2>
        <p>
          Sunday-Friday: 1PM- 1AM
          <br />
          Saturday: 7PM- 2AM
        </p>
        <h2>Location</h2>
        <p> Gordon st. 153, Tel Aviv</p>
        <br />
      </section>
    </div>
  );
};

export default Contact;
