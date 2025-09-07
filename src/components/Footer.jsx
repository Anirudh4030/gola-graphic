// src/components/Footer.jsx
import React from 'react'

export default function Footer(){
  return (
    <footer className="bg-black border-t border-white/5 text-white/80">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-sm">© {new Date().getFullYear()} Gola Graphic — All rights reserved.</div>
        <div className="flex gap-4 text-sm">
          <a href="https://www.instagram.com/golagraphic/" className="hover:text-brandRed">Instagram</a>
          <a href="https://www.linkedin.com/company/gola-graphic/" className="hover:text-brandRed">LinkedIn</a>
          <a href="golaworks@gmail.com" className="hover:text-brandRed">Email</a>
        </div>
      </div>
    </footer>
  )
}
