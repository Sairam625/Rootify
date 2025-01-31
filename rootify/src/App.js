import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from  './components/Navbhar/Navbar';
import Home from './components/pages/Home';
import Auth from './components/pages/Auth';
import Loans from './components/pages/SchemeFinder';
import DisasterRelief from './components/pages/DisasterRelief';
import ContactUs from './components/pages/ContactUs';
 
 

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/Loans & schemes" element={<Loans />} />
        <Route path="/DisasterRelief" element={<DisasterRelief />} />
        <Route path="/ContactUs" element={<ContactUs />} />
      </Routes>
    </Router>
  );
}

 export default App;