import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Manga from './pages/Manga';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import PeriGame from './pages/PeriGame';

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/game" element={<PeriGame />} />
          <Route path="/manga" element={<Manga />} />
        </Routes>
      </main>

      <Footer />
    </Router>
  );
}

export default App;
