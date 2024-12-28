import "./orderConfirmation.css";
const confirmIcon =
  "/Product-List-With-Cart-React/assets/images/icon-order-confirmed.svg";
import { useContext, useEffect } from "react";
import { MyContext } from "../ContextProvider";

const OrderConfirmation = () => {
  const {
    cartItems,
    confirmOrder,
    setCartItems,
    setProducts,
    setConfirmOrder,
    initialState,
  } = useContext(MyContext);

  const newOrder = () => {
    setConfirmOrder(false);
    setCartItems([]);
    setProducts(initialState);
  };

  const orderTotalAmount = cartItems.reduce(
    (total, item) => total + item.quantity * item.price,
    0
  );

  useEffect(() => {
    if (confirmOrder) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
  });

  useEffect(() => {
    console.log("Current cart items:", cartItems);
  }, [cartItems]);

  return (
    <div>
      {confirmOrder && (
        <div className="confirmForm">
          <div className="confirmSummary">
            <img src={confirmIcon} alt="confirmIcon" className="pb-6"></img>
            <p className="text-textPreset1 text-[1.5rem] pb-4">
              Order Confirmed
            </p>
            <p className="text-Rose500 pb-6">We hope you enjoy your food!</p>
            <div className="orderProducts bg-Rose50 p-4">
              {cartItems.map((item) => (
                <div key={item.id} className="pt-2 pb-2">
                  <div className="productOrderSummary">
                    <img src={item.image.thumbnail}></img>
                    <p className="productName text-textPreset4Bold">
                      {item.name}
                    </p>
                    <div className="priceOrderSummary">
                      <span className="pickedAmount text-textPreset4Bold text-Red mr-4">
                        {item.quantity}x
                      </span>
                      <span className="pickedPrice text-textPreset4 text-Rose500">
                        @ ${item.price.toFixed(2)}
                      </span>
                    </div>
                    <p className="total text-textPreset3 ">
                      {" "}
                      ${(item.quantity * item.price).toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
              <hr className="seperator mt-2 mb-2"></hr>
              <div className="orderTotal">
                <p className="text-textPreset4 pl-2">OrderTotal</p>
                <p className="text-textPreset2">${orderTotalAmount}</p>
              </div>
            </div>

            <div className="confirmBtn" onClick={() => newOrder()}>
              Start New Order
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderConfirmation;
