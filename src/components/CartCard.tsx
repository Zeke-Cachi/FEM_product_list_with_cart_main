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
    <div>
      <h3>{item.name}</h3>
      <div>
        <div>
          <p>{item.quantity}x</p>
          <p>{item.price}</p>
          <p>{item.price * item.quantity!}</p>
        </div>
        <button aria-label="button" onClick={() => removeProductFromCart(item)}>
          <img src={removeIcon} alt="image of a remove icon" />
        </button>
      </div>
    </div>
  );
};

export default CartCard;
