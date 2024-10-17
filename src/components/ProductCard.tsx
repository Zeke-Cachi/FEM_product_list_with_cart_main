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

  //-----------------------------------------------------------------------------------
  const addToCart = (product: productDataType) => {
    const isProductInCart = cartItems.find(
      (element) => element.name === product.name
    );
    if (!isProductInCart) {
      setCartItems((prevItems) => [...prevItems, { ...product, quantity: 1 }]);
    } else {
      const updateQuantity = cartItems.map((element) =>
        element.name === product.name
          ? { ...element, quantity: (element.quantity || 0) + 1 }
          : { ...element }
      );
      setCartItems(updateQuantity);
    }
  };

  //----------------------------------------------------------------------------------
  const removeFromcart = (product: productDataType) => {
    const isProductInCart = cartItems.find(
      (element) => element.name === product.name
    );
    if (isProductInCart && isProductInCart!.quantity! === 1) {
      setCartItems((prevItems) =>
        prevItems.filter((item) => item.name !== product.name)
      );
    } else if (isProductInCart) {
      setCartItems((prevItems) =>
        prevItems.map((item) =>
          item.name === product.name
            ? { ...item, quantity: item.quantity! - 1 }
            : { ...item }
        )
      );
    }
  };

  //-----------------------------------------------------------------------------------
  const selectedQuantity = (): number => {
    const foundItem = cartItems.find((item) => item.name === product.name);
    return foundItem ? foundItem.quantity! : 0;
  };

  //-----------------------------------------------------------------------------------
  return (
    <div className="grid lg:grid-rows-3">
      <img
        src={isWideScreen ? product.image.desktop : product.image.mobile}
        alt="image of the dessert"
        className="rounded-lg row-span-2"
      />
      <div className="relative flex flex-col items-start justify-center">
        <>
          {selectedQuantity() === 0 ? (
            <button
              onClick={() => addToCart(product)}
              className="absolute h-12 w-2/3 -top-6 inset-x-1/2 -translate-x-1/2 bg-white 
              rounded-full font-semibold flex justify-center items-center gap-2 border-solid border border-project_rose_900"
            >
              <img src={addToCartIcon} alt="add to cart icon" />
              Add to Cart
            </button>
          ) : (
            <div
              className="absolute h-12 w-2/3 -top-6 inset-x-1/2 -translate-x-1/2 bg-project_red rounded-full font-semibold 
            items-center gap-2 px-6 flex justify-between text-white"
            >
              <button
                className="w-4 h-4 flex items-center justify-center rounded-full border-solid border border-white"
                onClick={() => removeFromcart(product)}
              >
                -
              </button>
              <p>{selectedQuantity()}</p>
              <button
                className="w-4 h-4 flex items-center justify-center rounded-full border-solid border border-white"
                onClick={() => addToCart(product)}
              >
                +
              </button>
            </div>
          )}
        </>
        <p className="font-semibold text-project_rose_500">
          {product.category}
        </p>
        <h4 className="font-semibold text-project_rose_900 text-lg">
          {product.name}
        </h4>
        <p className="font-semibold text-project_red text-xl">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
