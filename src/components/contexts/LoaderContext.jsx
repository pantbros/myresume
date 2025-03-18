import React, { createContext, useState, useContext } from 'react';

const LoaderContext = createContext();

// Custom hook to use loader context
export const useLoader = () => useContext(LoaderContext);

// LoaderProvider to wrap the app with loader state
export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false); // Pehle se false rakho

  const startLoading = () => setIsLoading(true);
  const stopLoading = () => setIsLoading(false);

  return (
    <LoaderContext.Provider value={{ isLoading, startLoading, stopLoading }}>
      {children}
    </LoaderContext.Provider>
  );
};
