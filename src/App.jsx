import React, { useEffect } from 'react'; 
import { Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { useLoader } from './components/contexts/LoaderContext'; 
import About from './pages/Aboutme/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import ServicePricing from './pages/ServicePricing/ServicePricing';
import Products from './pages/Products/Products';
import Loader from './components/Loader/Loader';
import Blog from './pages/Blog/Blog';
import NotFound404 from './pages/404NotFound/404';

function App() {
  const { isLoading, startLoading, stopLoading } = useLoader();
  const location = useLocation();

  useEffect(() => {
    startLoading(); // Route change hone pe loader start ho
    const timer = setTimeout(() => {
      stopLoading(); // 1.5s ke baad loader hide ho
    }, 1500);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [location.pathname]); // Runs when pathname changes

  return (
    <div className="flex h-screen overflow-hidden">
      {isLoading && <Loader />} 

      <Routes>
        <Route path="/" element={<Navigate to="/about" replace />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/service-and-pricing" element={<ServicePricing />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="*" element={<NotFound404 />} />
      </Routes>
    </div>
  );
}

export default App;
