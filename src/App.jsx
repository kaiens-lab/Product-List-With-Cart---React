import ProductList from "./Product/ProductList";
import Cart from "./Cart/Cart";
import "./App.css";
import MyContextProvider from "./ContextProvider";

function App() {
  return (
    <MyContextProvider>
      <div className="main">
        <div className="container">
          <div className="text-textPreset1 dessert">Dessert</div>
          <div className="choices">
            <ProductList />
          </div>
        </div>
        <div className="cart-container">
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
