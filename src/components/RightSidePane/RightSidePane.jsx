import React from 'react';
import { Route, Routes } from 'react-router-dom';
import About from '../../pages/Aboutme/About';  // Importing the About component

function RightSidePane() {
    return (
        <div className="py-[120px] px-10">
            <Routes>
                <Route path="/aboutme" element={<About />} />
                <Route path="/page2" element={<div>Page 2 Content</div>} />
                <Route path="/page3" element={<div>Page 3 Content</div>} />
                {/* Default Route */}
                <Route path="/" element={<div>Welcome! Please select a page.</div>} />
            </Routes>
        </div>
    );
}

export default RightSidePane;
