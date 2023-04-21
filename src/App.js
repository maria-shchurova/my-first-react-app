import React from 'react';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';

function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Routes>
      <Route path='/devolution7' element={<Home />} />
      <Route path='/devolution7/about' element={<About />} />
      </Routes>
    </Router>      
    </>
  );
}
export default App;
