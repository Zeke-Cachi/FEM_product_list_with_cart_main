import { productDataType } from "../types";
import { Dispatch, SetStateAction } from "react";
import CartCard from "./CartCard";

const Cart: React.FC<{
  cartItems: productDataType[];
  setCartItems: Dispatch<SetStateAction<productDataType[]>>;
}> = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <h2>
        Your Cart (
        {cartItems.reduce((counter, item) => counter + (item.quantity || 0), 0)}
        )
      </h2>
      {cartItems.map((item, index) => (
        <CartCard key={index} item={item} setCartItems={setCartItems} />
      ))}
    </div>
  );
};

export default Cart;
