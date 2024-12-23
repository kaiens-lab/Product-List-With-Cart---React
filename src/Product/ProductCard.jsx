import PropTypes from "prop-types";
import { useState, useEffect, useContext } from "react";
import AddToCartBtn from "./AddToCartBtn";
import { MyContext } from "../ContextProvider";

const ProductCard = ({ product, updateQuantity }) => {
  const { addToCart } = useContext(MyContext);
  const [defaultImage, setDefaultImage] = useState(product.image.mobile);

  useEffect(() => {
    const tabletQuery = window.matchMedia(
      "(min-width: 500px) and (max-width: 1024px)"
    );

    const desktopQuery = window.matchMedia("(min-width: 1025px)");

    const updateImage = () => {
      if (desktopQuery.matches) {
        setDefaultImage(product.image.desktop);
      } else if (tabletQuery.matches) {
        setDefaultImage(product.image.tablet);
      } else {
        setDefaultImage(product.image.mobile);
      }
    };

    // Initialization phase
    updateImage();

    // Listening phase
    tabletQuery.addEventListener("change", updateImage);
    desktopQuery.addEventListener("change", updateImage);

    // Cleanup listeners on unmount
    return () => {
      tabletQuery.removeEventListener("change", updateImage);
      desktopQuery.removeEventListener("change", updateImage);
    };
  }, [product.image]);

  return (
    <div className="product-card mb-6 rounded-lg">
      {/* Product Pic */}
      <img
        src={defaultImage}
        alt={product.name}
        className={`h-48 object-cover rounded-md mb-6 ${
          product.inCart ? "border-2 border-Red" : ""
        }`}
      />
      {/* Add Cart Btn */}
      <AddToCartBtn
        product={product}
        inCart={product.inCart}
        addToCart={addToCart}
        updateQuantity={updateQuantity}
      />
      {/* Product Info */}
      <p className="text-Rose500 text-textPreset4">{product.category}</p>
      <p className="text-Rose900 text-textPreset 3">{product.name}</p>
      <p className="text-Red text-textPreset 3">${product.price.toFixed(2)}</p>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.string.isRequired,
    inCart: PropTypes.bool.isRequired,
    quantity: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string,
    price: PropTypes.number.isRequired,
    image: PropTypes.shape({
      mobile: PropTypes.string.isRequired,
      desktop: PropTypes.string.isRequired,
      tablet: PropTypes.string.isRequired,
    }).isRequired,
  }).isRequired,
  updateQuantity: PropTypes.func.isRequired,
};
export default ProductCard;
