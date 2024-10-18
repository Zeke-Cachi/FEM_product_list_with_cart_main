import Desserts from "./components/Desserts";
import Cart from "./components/Cart";
import { useState } from "react";
import { productDataType } from "./types";
import OrderConfirmed from "./components/OrderConfirmed";

function App() {
  const [cartItems, setCartItems] = useState<productDataType[]>([]);
  const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

  return (
    <main className="font-red_hat grid lg:grid-cols-4 py-4 px-8 lg:py-20 lg:px-32 gap-16 lg:gap-8 relative">
      <Desserts cartItems={cartItems} setCartItems={setCartItems} />
      <Cart
        cartItems={cartItems}
        setCartItems={setCartItems}
        setIsModalVisible={setIsModalVisible}
      />
      {isModalVisible && (
        <OrderConfirmed
          cartItems={cartItems}
          setIsModalVisible={setIsModalVisible}
          setCartItems={setCartItems}
        />
      )}
    </main>
  );
}

export default App;
