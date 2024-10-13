import { Dispatch, SetStateAction } from "react";
import { productDataType } from "../types";
import { useIsWideScreen } from "../customHooks";
import addToCartIcon from "../../public/assets/images/icon-add-to-cart.svg";

const ProductCard: React.FC<{
  product: productDataType;
  cartItems: productDataType[];
  setCartItems: Dispatch<SetStateAction<productDataType[]>>;
}> = ({ product, cartItems, setCartItems }) => {
  const isWideScreen = useIsWideScreen();

  const addToCart = (product: productDataType) => {
    const isProductInCart = cartItems.find(
      (element) => element.name === product.name
    );
    if (!isProductInCart) {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    } else {
      const updateQuantity = cartItems.map((element) =>
        element.name === product.name
          ? { ...element, quantity: element.quantity! + 1 }
          : { ...element }
      );
      setCartItems(updateQuantity);
    }
  };

  return (
    <div>
      <img
        src={isWideScreen ? product.image.desktop : product.image.mobile}
        alt="image of the dessert"
      />
      <button onClick={() => addToCart(product)}>
        <img src={addToCartIcon} alt="add to cart icon" />
        Add to Cart
      </button>
      <p>{product.category}</p>
      <h4>{product.name}</h4>
      <p>{product.price}</p>
    </div>
  );
};

export default ProductCard;
