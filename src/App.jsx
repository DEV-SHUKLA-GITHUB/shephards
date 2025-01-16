import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import ContactPage from './Pages/ContactUs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MiniNavbar from './components/MiniNavbar';
import PropertyPage from './Pages/PropertyPage'

const App = () => {
  return (
    <Router>
      {/* <MiniNavbar /> */}
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/PropertyPage" element={<PropertyPage />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
