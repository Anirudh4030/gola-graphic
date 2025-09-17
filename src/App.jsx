// src/App.jsx
import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Projects from './pages/Projects'
import Services from './pages/Services'
import Contact from './pages/Contact'

// 🔹 Import the new Gallery component
import Gallery from './components/Gallery'

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-black text-white">
        <NavBar />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />

            {/* 🔹 New route for Gallery */}
            <Route path="/gallery" element={<Gallery />} />

            {/* fallback to home */}
            <Route path="*" element={<Home />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  )
}
