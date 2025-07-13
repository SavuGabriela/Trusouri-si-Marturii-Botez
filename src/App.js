import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';
import Trusouri from './Pages/Trusouri.jsx';
import Marturii from './Pages/Marturii.jsx';
import About from './Pages/About.jsx';
import Contact from './Pages/Contact.jsx';

import Header from './Components/Header.jsx';
import Footer from './Components/Footer.jsx';

const App = () => {
  return (
    <Router>
      <div
        style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}
      >
        <Header />
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/trusouri" element={<Trusouri />} />
            <Route path="/marturii" element={<Marturii />} />
            <Route path="/despre" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
