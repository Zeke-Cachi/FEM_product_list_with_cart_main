import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import { useState } from "react";
import { productDataType } from "./types";

function App() {
  const [cartItems, setCartItems] = useState<productDataType[]>([]);

  return (
    <main className="font-red_hat">
      <Desserts cartItems={cartItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </main>
  );
}

export default App;
