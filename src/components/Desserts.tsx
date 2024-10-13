import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { productDataType } from "../types";
import jsonData from "../../data.json";
import ProductCard from "./ProductCard";

const Desserts: React.FC<{
  cartItems: productDataType[];
  setCartItems: Dispatch<SetStateAction<productDataType[]>>;
}> = ({ cartItems, setCartItems }) => {
  const [productData, setProductData] = useState<productDataType[]>([]);

  useEffect(() => {
    jsonData.map((product) =>
      setProductData((prevItems) => [...prevItems, product])
    );
  }, []);

  return productData.map((prod: productDataType, index: number) => (
    <ProductCard
      key={index}
      product={prod}
      cartItems={cartItems}
      setCartItems={setCartItems}
    />
  ));
};

export default Desserts;
