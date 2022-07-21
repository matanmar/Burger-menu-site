import React from "react";
import classes from "./About.module.css";

const about = () => {
  return (
    <div className={classes.summary}>
      <section>
        <h2> This is the Amirca Burger new site</h2>
        <p>
          These guys opened in Summer 2015 and have quickly established
          themselves as one of the best burgers in Tel Aviv. They have a simple
          no-nonsense menu – choice of burger, chicken burger (also great), or
          vege burger, side of fries, green beans, salad or amazing fried onion,
          and ice-cream for desert. We recommend the burger, it’s delicious!
        </p>
        <h3>Owners: Matan Marciano & Tal Sherf</h3>
        <br />
      </section>
    </div>
  );
};

export default about;
