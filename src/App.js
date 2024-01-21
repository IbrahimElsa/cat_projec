import React from 'react';
import Main from './pages/Main';
import Hygiene from './pages/Hygiene';
import Training from './pages/Training';
import Breeds from './pages/Breeds';
import Health from './pages/Health';
import Reviews from './pages/Reviews';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nutrition from './pages/Nutrition';


function App() {
  return (
    <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/food-nutrition" element={<Nutrition />} />
          <Route path="/litter-hygiene" element={<Hygiene />} />
          <Route path="/behavior-training" element={<Training />} />
          <Route path="/health-wellness" element={<Health />} />
          <Route path="/breeds" element={<Breeds />} />
          <Route path="/product-reviews" element={<Reviews />} />
          <Route path="/about" element={<About />} />
        </Routes>
    </Router>
  );
}

export default App;