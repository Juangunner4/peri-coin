import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PeriGame from './components/PeriGame';

function App() {

  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/peri" element={<PeriGame />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
