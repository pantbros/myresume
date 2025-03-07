import React from 'react';

// Simple Loader Component
const Loader = ({ children }) => {
  const loading = true; // This can be set dynamically, for now, it's static

  return (
    <div className="loader-wrapper">
      {loading ? (
        <div className="spinner"></div>  // Loading spinner
      ) : (
        children  // Once loading is done, render the child components
      )}
    </div>
  );
};
export default Loader;
