import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate} from 'react-router-dom';
import LeftSidePane from './components/LeftSidePane/LeftSidePane';
import profilepic from '../src/assets/profile.png';
import About from './pages/Aboutme/About';
import Contact from "./pages/Contact/Contact";
import Portfolio from "./pages/Portfolio/Portfolio";
import Resume from "./pages/Resume/Resume.jsx";
import ServicePricing from "./pages/ServicePricing/ServicePricing.jsx";
import Products from "./pages/Products/Products.jsx";
import Blog from "./pages/Blog/Blog.jsx";
function App() {
  return (
    <>
    <Router>
      <div className='flex h-[100vh] overflow-hidden w-[100%]'>
        <LeftSidePane name='Pankaj Pant' designation='Frontend Developer' profilepic={profilepic}/>
        <Routes>
          <Route path="/" element={<Navigate to="/about" replace />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/service-and-pricing" element={<ServicePricing />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/products" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </div>
    </Router>
    </>
  )
}

export default App