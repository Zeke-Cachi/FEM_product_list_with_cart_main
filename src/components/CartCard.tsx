import { Dispatch, SetStateAction } from "react";
import { productDataType } from "../types";
import removeIcon from "../../public/assets/images/icon-remove-item.svg";

const CartCard: React.FC<{
  item: productDataType;
  setCartItems: Dispatch<SetStateAction<productDataType[]>>;
}> = ({ item, setCartItems }) => {
  const removeProductFromCart = (prod: productDataType) => {
    setCartItems((prevItems) => prevItems.filter((item) => item !== prod));
  };

  return (
    <>
      <div className="flex justify-between items-center px-4">
        <div className="flex flex-col gap-2">
          <h3 className="font-semibold text-project_rose_900">{item.name}</h3>
          <div className="flex gap-2">
            <p className="text-project_red me-2 font-semibold">
              {item.quantity}x
            </p>
            <p className="text-project_rose_400">@${item.price.toFixed(2)}</p>
            <p className="text-project_rose_500 font-semibold">
              ${(item.price * item.quantity!).toFixed(2)}
            </p>
          </div>
        </div>
        <div className="grid place-items-center rounded-full h-4 w-4 border-solid border border-project_rose_500">
          <button
            aria-label="button"
            onClick={() => removeProductFromCart(item)}
          >
            <img src={removeIcon} alt="image of a remove icon" />
          </button>
        </div>
      </div>
      <hr className="text-purple-500 w-5/6 h-4 block mx-auto mt-4" />
    </>
  );
};

export default CartCard;
