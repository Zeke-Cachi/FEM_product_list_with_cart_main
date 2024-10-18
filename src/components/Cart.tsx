import { productDataType } from "../types";
import { Dispatch, SetStateAction } from "react";
import CartCard from "./CartCard";
import emptyCartImg from "../../public/assets/images/illustration-empty-cart.svg";
import carbonNeutralImg from "../../public/assets/images/icon-carbon-neutral.svg";

const Cart: React.FC<{
  cartItems: productDataType[];
  setCartItems: Dispatch<SetStateAction<productDataType[]>>;
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
}> = ({ cartItems, setCartItems, setIsModalVisible }) => {
  const checkEmptyCart = () => {
    return cartItems.length === 0
      ? alert("No items added in the cart!")
      : setIsModalVisible(true);
  };

  return (
    <div>
      <h2 className="text-2xl font-bold lg:mt-8 text-project_red mb-16 lg:mb-8 ms-4 lg:ms-0">
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
      <div
        className={`justify-between px-2 mt-12 lg:mt-8 ${
          cartItems.length === 0 ? "hidden" : "flex"
        }`}
      >
        <p className="text-project_rose_900">Order total</p>
        <h4 className="text-2xl font-bold">
          $
          {cartItems
            .reduce((acc, item) => acc + item.price * item.quantity!, 0)
            .toFixed(2)}
        </h4>
      </div>
      <div
        className={`gap-2 my-8 justify-center text-project_rose_900 ${
          cartItems.length === 0 ? "hidden" : "flex"
        }`}
      >
        <img src={carbonNeutralImg} alt="carbon neutral icon" />
        <p>
          This is a <span className="font-semibold">carbon neutral</span>{" "}
          delivery
        </p>
      </div>
      <button
        onClick={() => checkEmptyCart()}
        className={`h-14 w-full mx-auto bg-project_red 
              rounded-full font-semibold justify-center items-center gap-2 border-solid border-project_rose_900 text-white ${
                cartItems.length === 0 ? "hidden" : "flex"
              }`}
      >
        Confirm order
      </button>
    </div>
  );
};

export default Cart;
