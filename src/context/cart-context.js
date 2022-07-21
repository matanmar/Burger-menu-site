import React, { useState } from "react";

export const CartContext = React.createContext();

const CartContextProvider = (props) => {
  const [totalAmount, setTotalAmount] = useState(0);
  const [items, setItems] = useState([]);

  const addItemHandler = (currItem, amount = 1) => {
    const selectedItemIndex = items.findIndex(
      (item) => item.id === currItem.id
    );

    if (selectedItemIndex !== -1) {
      items[selectedItemIndex].amount =
        items[selectedItemIndex].amount + amount;
    } else {
      currItem.amount = currItem.amount + amount;
      setItems((pre) => [...pre, currItem]);
    }

    setTotalAmount(totalAmount + amount);
  };

  const removeItemHandler = (currItem) => {
    let filteredItems;

    const selectedItemIndex = items.findIndex(
      (item) => item.id === currItem.id
    );

    if (currItem.amount === 1) {
      filteredItems = items.filter((item) => item.id !== currItem.id);
      setItems(filteredItems);
    } else {
      items[selectedItemIndex].amount = items[selectedItemIndex].amount - 1;
    }

    setTotalAmount(totalAmount - 1);
  };

  return (
    <CartContext.Provider
      value={{
        items: items,
        totalAmount: totalAmount,
        removeItem: removeItemHandler,
        addItem: addItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;
