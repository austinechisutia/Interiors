// CartContext.js (Updated)

"use client"

import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState(0);

  // Hydrate from localStorage on mount (client-side only)
  useEffect(() => {
    const savedCount = localStorage.getItem('cartItemCount');
    if (savedCount) {
      setItemCount(parseInt(savedCount, 10));
    }
  }, []); // Empty dependency array = runs once on mount

  useEffect(() => {
    localStorage.setItem('cartItemCount', itemCount.toString());
    console.log(`Saved count: ${itemCount} to Local Storage.`);
  }, [itemCount]); // Dependency Array: run effect when itemCount changes

  const addItem = () => {
    setItemCount(prevCount => prevCount + 1);
  };

  const contextValue = {
    itemCount,
    addItem,
  };

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};