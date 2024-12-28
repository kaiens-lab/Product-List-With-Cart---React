import ProductList from "./Product/ProductList";
import Cart from "./Cart/Cart";
import "./App.css";
import MyContextProvider from "./ContextProvider";
import OrderConfirmation from "./OrderConfirmation/OrderConfirmation";

function App() {
  return (
    <MyContextProvider>
      <OrderConfirmation />

      <div className="container">
        <div className="product-section">
          <div className="text-textPreset1">Dessert</div>
          <div className="products">
            <ProductList />
          </div>
        </div>
        <div className="cart-section">
          <Cart />
        </div>
      </div>

      <div className="attribution text-textPreset4 mt-4">
        Challenge by
        <a href="https://www.frontendmentor.io?ref=challenge">
          {"  "}
          Frontend Mentor
        </a>
        . Coded by
        <a href="https://www.frontendmentor.io/profile/kaiens-lab"> KN Chang</a>
        .
      </div>
    </MyContextProvider>
  );
}

export default App;
