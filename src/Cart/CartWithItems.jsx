const carbonNeutralImage =
  "/Product-List-With-Cart-React/assets/images/icon-carbon-neutral.svg";
const removeImage =
  "/Product-List-With-Cart-React/assets/images/icon-remove-item.svg";
import { useContext } from "react";
import { MyContext } from "../ContextProvider";

const CartWithItems = () => {
  const { cartItems, setCartItems, setProducts } = useContext(MyContext);
  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const handleRemoveItem = (id) => {
    //Adjust item quantities in the cart
    setCartItems((prevItems) =>
      prevItems
        .map((item) => {
          if (item.id === id && item.quantity > 1) {
            return {
              ...item,
              quantity: item.quantity - 1,
            };
          }
          return item;
        })
        .filter((item) => item.quantity > 0)
    );

    // Update product quantities in the product list
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          const newQuantity = product.quantity > 1 ? product.quantity - 1 : 0;
          return {
            ...product,
            inCart: newQuantity > 0,
            quantity: newQuantity,
          };
        }
        return product;
      })
    );
  };

  return (
    <div>
      <div>
        <div className="pickedDiv mb-4">
          <div className="productOrderSummary">
            {cartItems.map((item) => (
              <div key={item.id}>
                <div>
                  <p className="text-textPreset4Bold">{item.name} </p>
                </div>
                <div className="priceOrderSummary">
                  <span className="pickedAmount text-Red text-textPreset4Bold mr-4">
                    {item.quantity}x
                  </span>
                  <span className="pickedPrice text-Rose500 mr-2 text-textPreset4">
                    @ ${item.price}
                  </span>
                  <span className="pickedPriceTotal  text-Rose500 text-textPreset4Bold">
                    {item.quantity * item.price}
                  </span>
                  <div className="removeIcon">
                    <img
                      src={removeImage}
                      alt="removeBtn"
                      className="removeBtn"
                      onClick={() => handleRemoveItem(item.id)}
                    ></img>
                  </div>
                </div>

                <hr className="seperator  mb-4"></hr>
              </div>
            ))}
          </div>
        </div>

        <div className="orderTotal mb-4">
          <p className="orderTotalText text-Rose900 text-textPreset4">
            Order Total
          </p>
          <p className="orderTotalPrice text-Rose900 text-textPreset2 ">
            {totalAmount.toFixed(2)}
          </p>
        </div>
        <div className="carbonNeutral p-4 mb-4">
          <img
            src={carbonNeutralImage}
            alt="carbonNeutral"
            className="mr-2"
          ></img>
          <p>This is a carbon-neutral delivery</p>
        </div>
        <div className="confirmBtn">Confirm Order</div>

        <div></div>
      </div>
    </div>
  );
};

export default CartWithItems;
