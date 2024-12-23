import PropTypes from "prop-types";
const addToCartIcon =
  "/Product-List-With-Cart-React/assets/images/icon-add-to-cart.svg";
const increaseIcon =
  "/Product-List-With-Cart-React/assets/images/icon-increment-quantity.svg";
const decreaseIcon =
  "/Product-List-With-Cart-React/assets/images/icon-decrement-quantity.svg";

function AddToCartBtn({ product, addToCart, updateQuantity }) {
  const { inCart, quantity } = product;

  const increaseQuantity = () => {
    updateQuantity(product.id, 1);
  };

  const decreaseQuantity = () => {
    updateQuantity(product.id, -1);
  };

  return (
    <div>
      {inCart ? (
        <div className="quantityBtn button bg-Red font-white px-4">
          <button
            onClick={() => {
              decreaseQuantity();
            }}
            className="amountBtn"
          >
            <img src={decreaseIcon} className="amountChange"></img>
          </button>
          <span className="text-textPreset4Bold">{quantity}</span>
          <button
            onClick={() => {
              increaseQuantity();
            }}
            className="amountBtn"
          >
            <img src={increaseIcon} className="amountChange"></img>
          </button>
        </div>
      ) : (
        <div
          onClick={() => addToCart(product.id)}
          className="button bg-Rose50 gap-2 px-4 py-2 hover:bg-Rose100"
        >
          <img src={addToCartIcon} alt="Add to Cart" className="w-6 h-6" />
          <p className="font-Rose900 text-textPreset4Bold">Add to Cart</p>
        </div>
      )}
    </div>
  );
}

AddToCartBtn.propTypes = {
  inCart: PropTypes.bool.isRequired,
  addToCart: PropTypes.func.isRequired,
  updateQuantity: PropTypes.func.isRequired,
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
};

export default AddToCartBtn;
