import React, { createContext, useState } from "react";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [productsInCart, setProductsInCart] = useState([]);

  return (
    <AppContext.Provider value={{ productsInCart, setProductsInCart }}>
      {children}
    </AppContext.Provider>
  );
};

export { AppContext, AppProvider };
