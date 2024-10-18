import { productDataType } from "../types";
import orderConfirmedImg from "../../public/assets/images/icon-order-confirmed.svg";
import OrderConfirmedCard from "./OrderConfirmedCard";
import { Dispatch, SetStateAction } from "react";

const OrderConfirmed: React.FC<{
  cartItems: productDataType[];
  setIsModalVisible: Dispatch<SetStateAction<boolean>>;
  setCartItems: Dispatch<SetStateAction<productDataType[]>>;
}> = ({ cartItems, setIsModalVisible, setCartItems }) => {
  const cleanupActions = () => {
    setCartItems([]);
    setIsModalVisible(false);
  };

  return (
    <div className="absolute inset-0 before:absolute before:bg-black before:opacity-50 before:h-full before:w-full">
      <div className="fixed bg-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-1/3 p-6 rounded-lg">
        <img src={orderConfirmedImg} alt="green checkmark" />
        <div className="mb-8 grid gap-2">
          <h2 className="text-3xl font-bold lg:mt-8 text-project_rose_900">
            Order Confirmed
          </h2>
          <p className="text-project_rose_500">We hope you enjoy your food!</p>
        </div>
        <div className="lg:col-span-1 lg:row-span-2">
          {cartItems.map((item, index) => (
            <OrderConfirmedCard key={index} item={item} />
          ))}
        </div>
        <div className="flex justify-between px-2 lg:mt-8">
          <p className="text-project_rose_900 mt-4 mb-16">Order total</p>
          <h4 className="text-2xl font-bold">
            $
            {cartItems
              .reduce((acc, item) => acc + item.price * item.quantity!, 0)
              .toFixed(2)}
          </h4>
        </div>
        <button
          onClick={() => cleanupActions()}
          className="h-14 w-full mx-auto bg-project_red
                rounded-full font-semibold flex justify-center items-center gap-2 border-solid border-project_rose_900 text-white"
        >
          Start new order
        </button>
      </div>
    </div>
  );
};

export default OrderConfirmed;
