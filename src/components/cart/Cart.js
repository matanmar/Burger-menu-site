import React from "react";
import Modal from "../UI/Modal";
import classes from "./Cart.module.css";
import { CartContext } from "../../context/cart-context";
import { useContext } from "react";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const hasItems = cartCtx.items.length > 0;

  const totalPrice = cartCtx.items
    .reduce((counter, item) => (counter += item.price * item.amount), 0)
    .toFixed(2);

  const removeItemHandler = (item) => {
    cartCtx.removeItem(item);
    console.log(cartCtx.items);
  };

  const addItemHandler = (item) => {
    cartCtx.addItem(item);
    console.log(cartCtx.items);
  };

  const orderHandler = () => {
    console.log("Your order sent to America Burger!");
  };

  return (
    <Modal>
      <ul classes={["cart-items"]}>
        {cartCtx.items.map((meal) => (
          <li className={classes["cart-item"]} key={meal.id}>
            <div>
              <h2>{meal.name}</h2>
              <div className={classes.summary}>
                <span className={classes.price}>
                  {meal.price.toFixed(2) + " $"}
                </span>
                <span className={classes.amount}>x {meal.amount}</span>
              </div>
            </div>
            <div className={classes.actions}>
              <button onClick={addItemHandler.bind(null, meal)}>+</button>
              <button onClick={removeItemHandler.bind(null, meal)}>-</button>
            </div>
          </li>
        ))}
      </ul>
      {!hasItems ? (
        <h2> No items in cart yet!</h2>
      ) : (
        <div className={classes.total}>
          <span>Total Amount</span>
          <span>{totalPrice + " ₪"}</span>
        </div>
      )}
      <div className={classes.actions}>
        <button className={classes["buttom--alt"]} onClick={props.onClose}>
          Close
        </button>
        {hasItems && (
          <button onClick={orderHandler} className={classes.button}>
            Order
          </button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
