import { useContext } from "react";
import ProductCard from "./ProductCard";
import { MyContext } from "../ContextProvider";

const ProductList = () => {
  const { products, updateQuantity } = useContext(MyContext);

  return (
    <div className="product-list">
      {products.length > 0 ? (
        products.map((product, index) => (
          <ProductCard
            key={index}
            product={product}
            updateQuantity={updateQuantity}
          />
        ))
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default ProductList;
