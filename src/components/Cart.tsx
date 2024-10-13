import { cartItem } from "../types";
import { Dispatch, SetStateAction } from "react";

const Cart: React.FC<{
  cartItems: cartItem[];
  setCartItems: Dispatch<SetStateAction<cartItem[]>>;
}> = ({ cartItems, setCartItems }) => {
  return <div>Cart</div>;
};

export default Cart;
