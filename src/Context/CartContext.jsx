import React, { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const useCart = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }) => {
  // Initialize cart from localStorage if available
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  });

  // console.log("CartProvider Mounted! Cart Items:", cartItems);

  // Save to localStorage whenever cartItems changes
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    // console.log("Adding to Cart:", product);

    setCartItems((prevItems) => {
      const existingItem = prevItems.find((item) => item.title === product.title);
      
      if (existingItem) {
        // console.log("Item Already in Cart, Updating Quantity");
        return prevItems.map((item) =>
          item.title === product.title
            ? { ...item, numberOfItem: item.numberOfItem + 1 }
            : item
        );
      } else {
        // console.log("New Item Added to Cart");
        return [...prevItems, { ...product, numberOfItem: 1 }];
      }
    });
  };

  const updateQuantity = (title, change) => {
    // console.log(`Updating Quantity for ${title}, Change: ${change}`);
    setCartItems((prevItems) =>
      prevItems.map((item) =>
        item.title === title ? { ...item, numberOfItem: Math.max(1, item.numberOfItem + change) } : item
      )
    );
  };

  const removeItem = (title) => {
    // console.log(`Removing Item: ${title}`);
    setCartItems((prevItems) => prevItems.filter((item) => item.title !== title));
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.numberOfItem, 0);

  return (
    <CartContext.Provider value={{ cartItems, addToCart, updateQuantity, removeItem, totalPrice }}>
      {children}
    </CartContext.Provider>
  );
};
