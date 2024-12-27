import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types";
import data from "./data.json";
import { customAlphabet } from "nanoid"; //Generate id

export const MyContext = createContext();

function MyContextProvider({ children }) {
  const nanoid = customAlphabet("abcde012345", 5);

  const initialState = data.map((item) => ({
    ...item,
    id: nanoid(),
    inCart: false,
    quantity: 0,
  }));

  const [products, setProducts] = useState(initialState); //product list
  const [cartItems, setCartItems] = useState([]); //items in the cart
  const [confirmOrder, setConfirmOrder] = useState(false); //confirm Page

  const addToCart = (id) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          return {
            ...product,
            inCart: true,
            quantity: product.inCart ? product.quantity + 1 : 1,
          };
        }
        return product;
      })
    );
  };

  //Renew the items in the cart
  //to ensure the cart's rendering matches the product list.
  useEffect(() => {
    const cart = products.filter((product) => product.inCart);
    setCartItems(cart);
  }, [products]);

  const updateQuantity = (id, amount) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) => {
        if (product.id === id) {
          const newQuantity = product.quantity + amount;
          return {
            ...product,
            quantity: Math.max(0, newQuantity),
            inCart: newQuantity <= 0 ? false : product.inCart,
          };
        }
        return product;
      })
    );
  };

  return (
    <MyContext.Provider
      value={{
        products,
        setProducts,
        addToCart,
        updateQuantity,
        cartItems,
        setCartItems,
        confirmOrder,
        setConfirmOrder,
        initialState,
      }}
    >
      {children}
    </MyContext.Provider>
  );
}

MyContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MyContextProvider;
