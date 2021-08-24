import React, { useState } from "react";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart"
import CartProvider from "./Store/CartProvider";

function App() {

  const [cartIsShown, setCartIsShown] = useState(false)

  const onShowCartHandler = () => {
    setCartIsShown(true)
    console.log("Open")
  }

  const onCloseCartHandler = () => {
    setCartIsShown(false)
    console.log("Close")
  }

  return (
    <CartProvider>
      {cartIsShown &&
        <Cart
          onCloseCart={onCloseCartHandler}>
        </Cart>
      }
      <Header
        onShowCart={onShowCartHandler}>
      </Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;

