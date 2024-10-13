import { Dispatch, SetStateAction } from "react";
import { cartItem } from "../types";

const Desserts: React.FC<{
  cartItems: cartItem[];
  setCartItems: Dispatch<SetStateAction<cartItem[]>>;
}> = ({ cartItems, setCartItems }) => {
  return <div>Desserts</div>;
};

export default Desserts;
