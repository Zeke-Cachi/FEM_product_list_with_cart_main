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

  //-----------------------------------------------------------------------------------
  return (
    <div className="lg:col-span-3">
      <h1 className="lg:col-span-3 font-red_hat font-bold text-4xl text-project_rose_900 mb-8">
        Desserts
      </h1>
      <section className="grid lg:grid-cols-3 gap-8">
        {productData.map((prod: productDataType, index: number) => (
          <ProductCard
            key={index}
            product={prod}
            cartItems={cartItems}
            setCartItems={setCartItems}
          />
        ))}
      </section>
    </div>
  );
};

export default Desserts;
