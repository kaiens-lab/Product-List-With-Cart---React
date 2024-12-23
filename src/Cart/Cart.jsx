import { useContext } from "react";
import { MyContext } from "../ContextProvider";
import EmptyCart from "./EmptyCart";
import CartWithItems from "./CartWithItems";

function Cart() {
  const { cartItems } = useContext(MyContext);

  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const isEmptyCart = cartItems.length === 0;

  return (
    <div className="cart-container">
      <div className="cart" id="cart">
        <h2 className=" text-Red text-textPreset2 mb-6">
          Your Cart ({totalItems})
        </h2>
        {isEmptyCart ? <EmptyCart /> : <CartWithItems />}
      </div>
    </div>
  );
}

export default Cart;
