import React, { Fragment, useState } from "react";
import Header from "./components/layout/Header";
import AvialebleMeals from "./components/meals/AvialebleMeals";
import Cart from "./components/cart/Cart";

const MainApp = () => {
  const [show, setShow] = useState(false);

  const closeModal = () => {
    setShow(false);
  };

  const openModal = () => {
    setShow(true);
  };

  return (
    <Fragment>
      {show && <Cart onClose={closeModal} />}
      <Header isImg={true} onShowCart={openModal} />
      <AvialebleMeals />
    </Fragment>
  );
};

export default MainApp;
