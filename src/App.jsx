import React from 'react'; 
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'; 
import Meta from './components/Meta/Meta';
import About from './pages/Aboutme/About';
import Contact from './pages/Contact/Contact';
import Portfolio from './pages/Portfolio/Portfolio';
import Resume from './pages/Resume/Resume';
import ServicePricing from './pages/ServicePricing/ServicePricing';
import Products from './pages/Products/Products';
import Blog from './pages/Blog/Blog';
import NotFound404 from './pages/404NotFound/404';

function App() {
  const location = useLocation();
  return (
    <div className="flex h-screen overflow-hidden">
      <Meta path={location.pathname}/>
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
