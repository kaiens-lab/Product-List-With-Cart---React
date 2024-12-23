const emptyCartImage =
  "/Product-List-With-Cart-React/assets/images/illustration-empty-cart.svg";

const EmptyCart = () => {
  return (
    <div>
      <img
        src={emptyCartImage}
        alt="emptyCart"
        className="emptyCartImage"
      ></img>
      <p className="emptyCartText text-textPreset4Bold text-Rose500">
        Your added items will appear here.
      </p>
    </div>
  );
};

export default EmptyCart;
