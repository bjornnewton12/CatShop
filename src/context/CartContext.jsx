import { createContext, useContext, useState } from "react";

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  function addToCart(cat) {
    setCartItems((prev) => {
      if (prev.some((item) => item.id === cat.id)) {
        return prev;
      }
      return [...prev, cat];
    });
  }

  function removeFromCart(cat) {
    setCartItems((prev) => prev.filter((item) => item.id !== cat.id));
  }

  function clearCart() {
    setCartItems([]);
  }

  return (
    <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
