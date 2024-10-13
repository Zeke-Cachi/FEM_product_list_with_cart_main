import { Fragment } from "react/jsx-runtime";
import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import { useEffect, useState } from "react";
import { cartItem } from "./types";
import jsonData from "../data.json";

function App() {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);

  useEffect(() => {
    jsonData.map((product) =>
      setCartItems((prevItems) => [...prevItems, product])
    );
  }, []);

  return (
    <Fragment>
      <Desserts cartItems={cartItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </Fragment>
  );
}

export default App;
