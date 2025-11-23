// CartContext.js (Updated)

"use client"

import React, { createContext, useState, useContext, useEffect } from 'react';

const CartContext = createContext();



// Function to get the initial count from Local Storage
const getInitialCount = () => {
  const savedCount = localStorage.getItem('cartItemCount');
  return savedCount ? parseInt(savedCount, 10) : 0;
};

export const CartProvider = ({ children }) => {
  // Use the function to set the initial state
  const [itemCount, setItemCount] = useState(getInitialCount);

  // === 🛑 CORE CHANGE: Use useEffect to sync state to Local Storage 🛑 ===
  useEffect(() => {
    // This runs every time 'itemCount' changes
    localStorage.setItem('cartItemCount', itemCount.toString());
    console.log(`Saved count: ${itemCount} to Local Storage.`);
  }, [itemCount]); // Dependency Array: run effect when itemCount changes
  // ====================================================================

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


