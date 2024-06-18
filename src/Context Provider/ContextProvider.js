import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

const ContextProvider = ({ children }) => {
  const [phones, setPhones] = useState([]);

  const info = { phones, setPhones };
  return (
    <GlobalContext.Provider value={info}>{children}</GlobalContext.Provider>
  );
};

export default ContextProvider;
