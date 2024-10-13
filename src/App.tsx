import { Fragment } from "react/jsx-runtime";
import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import { useState } from "react";
import { productDataType } from "./types";

function App() {
  const [cartItems, setCartItems] = useState<productDataType[]>([]);

  return (
    <Fragment>
      <Desserts cartItems={cartItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </Fragment>
  );
}

export default App;
