import React from 'react';
import Navbar from './Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function Nutrition() {
    return (
        <Router>
            <Routes>
                <Route path="/cat-food-nutrition" element={<Navbar />} />
            </Routes>
        </Router>
    );
}

export default Nutrition;