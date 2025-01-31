import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from  './components/Navbhar/Navbar';
import Home from './components/pages/Home';
import Auth from './components/pages/Auth';
import SchemeFinder from './components/pages/SchemeFinder';
import DisasterRelief from './components/pages/DisasterRelief';
import ContactUs from './components/pages/ContactUs';
 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/schemes" element={<SchemeFinder />} />
        <Route path="/disaster-relief" element={<DisasterRelief />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

export default App;
