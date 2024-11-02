import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

function App() {
  const [activeMenu, setActiveMenu] = useState('Markets'); 

  const toggleMenu = () => {
    setActiveMenu(activeMenu === 'Markets' ? 'Socials' : 'Markets');
  };

  return (
    <Router>
      <div>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
