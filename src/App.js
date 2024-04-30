import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Buy from './components/Buy';
import Contact from './components/Contact';
import logo from './images/logo.svg'; // Import the logo image

function App() {
  const [activeMenu, setActiveMenu] = useState('Markets'); // Default to 'Markets'

  const toggleMenu = () => {
    setActiveMenu(activeMenu === 'Markets' ? 'Socials' : 'Markets');
  };

  return (
    <Router>
      <div>
        <nav style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #ccc', paddingBottom: '10px' }}>
          <div>
            <img src={logo} alt="Memecoin Logo" style={{ width: '50px', height: '50px', marginRight: '20px' }} />
            <ul style={{ listStyleType: 'none', padding: 0, display: 'flex', gap: '20px' }}>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/buy">Buy</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          <div>
            <span onClick={toggleMenu} style={{ cursor: 'pointer', fontWeight: 'bold' }}>
              {activeMenu} ▼
            </span>
          </div>
          {activeMenu === 'Markets' ? (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <img src="/path/to/dexscreener_logo.svg" alt="Dexscreener" />
            <img src="/path/to/dextools_logo.svg" alt="Dextools" />
          </div>
        ) : (
          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
            <img src="/path/to/twitter_logo.svg" alt="Twitter" />
            <img src="/path/to/telegram_logo.svg" alt="Telegram" />
          </div>
        )}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
