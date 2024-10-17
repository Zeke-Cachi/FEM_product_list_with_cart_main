import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import { useState } from "react";
import { productDataType } from "./types";

function App() {
  const [cartItems, setCartItems] = useState<productDataType[]>([]);

  return (
    <main className="font-red_hat grid lg:grid-cols-4 py-20 px-32 gap-8">
      <Desserts cartItems={cartItems} setCartItems={setCartItems} />
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </main>
  );
}

export default App;
