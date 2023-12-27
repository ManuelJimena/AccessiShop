import { createContext, useState } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      const updatedCart = cart.map((item) =>
        item._id === product._id ? { ...item, quantity: item.quantity + 1 } : item
      );
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };


  const updateQuantity = (productId, newQuantity) => {
    console.log("Updating quantity for product:", productId, "to", newQuantity);
    const updatedCart = cart.map((item) => {
      if (item && item._id && productId && item._id.toString() === productId.toString()) {
        return { ...item, quantity: newQuantity };
      } else {
        return item;
      }
    });
    console.log("Updated Cart:", updatedCart);
    setCart(updatedCart);
  };
  
  const removeFromCart = (productId) => {
    console.log("Removing product with ID:", productId);
    const updatedCart = cart.filter((item) => item && item._id && productId && item._id.toString() !== productId.toString());
    console.log("Updated Cart:", updatedCart);
    setCart(updatedCart);
  };
  

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, clearCart }}>
      {children}
    </CartContext.Provider>
  );
};
