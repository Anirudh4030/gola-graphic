// src/components/NavBar.jsx
import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import Logo from '../assets/logo.png'

export default function NavBar() {
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const linkClass = (isActive) =>
    `text-base px-3 py-2 ${isActive ? 'text-brandRed' : 'text-white/90'} 
     hover:text-brandRed transition relative 
     after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-0.5 
     after:bg-brandRed after:transition-all hover:after:w-full`

  return (
    <header className="w-full fixed top-0 left-0 z-30 bg-black/50 backdrop-blur-md">
      <div className="max-w-6xl mx-auto px-6 py-2 flex items-center justify-center gap-6 relative">
        {/* left links */}
        <nav className="hidden sm:flex gap-4 items-center">
          <NavLink to="/" className={({ isActive }) => linkClass(isActive)}>Home</NavLink>
          <NavLink to="/projects" className={({ isActive }) => linkClass(isActive)}>Projects</NavLink>
          {/* 🔹 Gallery added here 
          <NavLink to="/gallery" className={({ isActive }) => linkClass(isActive)}>Gallery</NavLink> */}
        </nav> 

        {/* center logo */}
        <div
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
          onClick={() => navigate('/')}
          aria-label="Gola Graphic - Home"
        >
          <img src={Logo} alt="Gola Graphic" className="h-16 w-auto " />
        </div>

        {/* right links */}
        <nav className="hidden sm:flex gap-4 items-center">
          <NavLink to="/services" className={({ isActive }) => linkClass(isActive)}>Services</NavLink>
          <NavLink to="/contact" className={({ isActive }) => linkClass(isActive)}>Contact</NavLink>
        </nav>

        {/* Mobile menu button */}
        <button className="sm:hidden text-white absolute right-6" onClick={() => setOpen(!open)} aria-label="menu">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d={open ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden bg-black/90 py-2">
          <div className="flex flex-col px-4">
            <NavLink onClick={() => setOpen(false)} to="/" className="py-2 text-base text-white">Home</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/projects" className="py-2 text-base text-white">Projects</NavLink>
            {/* 🔹 Gallery link in mobile menu */}
               {/*
     <NavLink onClick={() => setOpen(false)} to="/gallery" className="py-2 text-base text-white">Gallery</NavLink> 
     
    */}
            <NavLink onClick={() => setOpen(false)} to="/services" className="py-2 text-base text-white">Services</NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className="py-2 text-base text-white">Contact</NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
