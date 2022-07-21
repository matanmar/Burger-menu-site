import React, { useRef } from "react";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitFormHandler = (e) => {
    e.preventDefault();
    const itemAmount = +amountInputRef.current.value;

    props.onAddToCart(props.item, itemAmount);
    // need to update cart by first update the context
  };

  return (
    <form className={classes.form} onSubmit={submitFormHandler}>
      <div className={classes.input}>
        <label htmlFor={props.item.id}> Amount</label>
        <input
          ref={amountInputRef}
          label="Amount"
          id={props.item.id}
          type="number"
          min="1"
          max="5"
          step="1"
          defaultValue="1"
        />
      </div>
      <button>Add +</button>
    </form>
  );
};

export default MealItemForm;
