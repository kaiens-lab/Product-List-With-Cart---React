const carbonNeutralImage =
  "/Product-List-With-Cart-React/assets/images/icon-carbon-neutral.svg";
const removeImage =
  "/Product-List-With-Cart-React/assets/images/icon-remove-item.svg";
import { useContext } from "react";
import { MyContext } from "../ContextProvider";

const CartWithItems = () => {
  const { cartItems, setCartItems, setProducts, setConfirmOrder } =
    useContext(MyContext);

  const totalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  const submitOrder = () => {
    setConfirmOrder((prev) => !prev);

    // 自動跳轉到頁面最上方
    window.scrollTo({
      top: 0,
      behavior: "smooth", // 平滑滾動效果
    });
  };

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
          <div className="cart-productOrderSummary">
            {cartItems.map((item) => (
              <div key={item.id} className="cart-orderProducts p-4">
                <p className="text-textPreset4Bold">{item.name} </p>

                <div className="cart-priceOrderSummary">
                  <div className="A">
                    <span className=" text-Red text-textPreset4Bold mr-4">
                      {item.quantity}x
                    </span>
                    <span className=" text-Rose500 mr-2 text-textPreset4">
                      @ ${item.price.toFixed(2)}
                    </span>
                    <span className="  text-Rose500 text-textPreset4Bold">
                      ${(item.quantity * item.price).toFixed(2)}
                    </span>
                  </div>
                  <div className="B">
                    <div className="removeIcon">
                      <img
                        src={removeImage}
                        alt="removeBtn"
                        className="removeBtn"
                        onClick={() => handleRemoveItem(item.id)}
                      ></img>
                    </div>
                  </div>
                </div>

                <hr className="seperator  mt-2 mb-2"></hr>
              </div>
            ))}
          </div>
        </div>

        <div className="orderTotal mb-4">
          <p className="orderTotalText text-Rose900 text-textPreset4">
            Order Total
          </p>
          <p className="orderTotalPrice text-Rose900 text-textPreset2 ">
            ${totalAmount.toFixed(2)}
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
        <div className="confirmBtn" onClick={() => submitOrder()}>
          Confirm Order
        </div>
      </div>
    </div>
  );
};

export default CartWithItems;
