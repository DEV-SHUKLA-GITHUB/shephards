import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MiniNavbar from './components/MiniNavbar';

const App = () => {
  return (
    <Router>
      <MiniNavbar />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
