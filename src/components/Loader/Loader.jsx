import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom"; // Import useLocation
import { useLoader } from "../contexts/LoaderContext";

const Loader = () => {
  const { isLoading, startLoading, stopLoading } = useLoader();
  const location = useLocation(); // Track route changes
  const [showLoader, setShowLoader] = useState(false); // Track loader visibility

  useEffect(() => {
    // Route change detect hone par loader start karo
    setShowLoader(true);
    startLoading();

    const timer = setTimeout(() => {
      stopLoading();
      setShowLoader(false); // 1.5s ke baad loader remove ho jaye
    }, 1500);

    return () => clearTimeout(timer); // Cleanup timer on unmount
  }, [location]); // ✅ Runs on every route change

  if (!showLoader) return null; // If false, completely remove loader

  return (
    <div className="fixed top-0 left-0 w-full h-full z-50 bg-transparent">
      {/* Left animation */}
      <div className="absolute top-0 left-0 w-[51%] h-full bg-primary-theme-clr opacity-100 animate-loaderLeft"></div>

      {/* Right animation */}
      <div className="absolute top-0 right-0 w-[51%] h-full bg-primary-theme-clr opacity-100 animate-loaderRight"></div>
    </div>
  );
};

export default Loader;
