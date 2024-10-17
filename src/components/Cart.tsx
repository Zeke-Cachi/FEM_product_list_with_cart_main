import { productDataType } from "../types";
import { Dispatch, SetStateAction } from "react";
import CartCard from "./CartCard";
import emptyCartImg from "../../public/assets/images/illustration-empty-cart.svg";

const Cart: React.FC<{
  cartItems: productDataType[];
  setCartItems: Dispatch<SetStateAction<productDataType[]>>;
}> = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold lg:mt-8 text-project_red">
        Your Cart (
        {cartItems.reduce((counter, item) => counter + (item.quantity || 0), 0)}
        )
      </h2>
      {cartItems.reduce(
        (counter, item) => counter + (item.quantity || 0),
        0
      ) === 0 ? (
        <div className="flex flex-col justify-center items-center">
          <img src={emptyCartImg} />
          <p className="font-semibold text-project_rose_900">
            Your added items will appear here
          </p>
        </div>
      ) : (
        <div className="lg:col-span-1 lg:row-span-2">
          {cartItems.map((item, index) => (
            <CartCard key={index} item={item} setCartItems={setCartItems} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;
