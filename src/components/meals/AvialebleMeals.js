import React, { useContext } from "react";
import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItemForm from "./MealItemForm";
import { CartContext } from "../../context/cart-context";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "America Burger",
    description: "Finest Burger",
    price: 35.0,
    amount: 0,
    imageUrl:
      "https://imageproxy.wolt.com/menu/menu-images/5c76b10cdef593000bd45f11/380f60ca-0168-11eb-a1c9-22ff7dab9203_medium_america168376_1.jpeg",
  },
  {
    id: "m2",
    name: "Cheese Burger",
    description: "Burger & Cheder",
    price: 40.0,
    amount: 0,
    imageUrl:
      "https://imageproxy.wolt.com/menu/menu-images/5c76b10cdef593000bd45f11/96445b74-0167-11eb-9140-5a8537cee36e_medium_america168392.jpeg",
  },
  {
    id: "m3",
    name: "Burger + Fries",
    description: "Great Meal",
    price: 65,
    amount: 0,
    imageUrl:
      "https://imageproxy.wolt.com/menu/menu-images/5c76b10cdef593000bd45f11/cc6c4154-da4f-11ec-b6e2-42fb902b55f8______________.jpeg",
  },
  {
    id: "m4",
    name: "Cookies",
    description: "Choclate cookie",
    price: 14,
    amount: 0,
    imageUrl:
      "https://imageproxy.wolt.com/menu/menu-images/5c76b10cdef593000bd45f11/e2b378a4-9af0-11ec-ade0-7297044031d2_img_9492.jpeg",
  },
];

const AvialebleMeals = () => {
  const cartCtx = useContext(CartContext);

  const addToCart = (item, amount = 1) => {
    cartCtx.addItem(item, amount);
  };

  return (
    <section className={classes.meals}>
      <Card>
        <ul>
          {DUMMY_MEALS.map((meal) => (
            <li className={classes.meal} key={meal.id}>
              <div className={classes.detailes}>
                <h3>{meal.name}</h3>
                <div className={classes.description}>{meal.description}</div>
                <div className={classes.price}>
                  {meal.price.toFixed(2) + " ₪"}
                </div>
              </div>
              <div>
                <img src={meal.imageUrl} alt="Burger + Fries" width="200" />
              </div>
              <div>
                <MealItemForm onAddToCart={addToCart} item={meal} />
              </div>
            </li>
          ))}
        </ul>
      </Card>
    </section>
  );
};

export default AvialebleMeals;
