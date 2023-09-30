import { useState } from 'react'
import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import About from './pages/About'
import Home from './pages/Home'
import Products from './pages/Products'
import { Route, Routes } from 'react-router-dom';




function App() {
  return (
    <div>
        <Navbar /> {/* Use your Navbar component */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Products" element={<Products />} />
      
        </Routes>
        <Footer />
      
   </div>
  );
}


export default App
