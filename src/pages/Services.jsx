// src/pages/Services.jsx
import React, { useEffect } from 'react'

const SERVICES = [
  {title:'Film Posters', desc: 'Feature films, short films, indie projects'},
  {title:'Title Designs', desc: 'Opening titles, credits & motion-ready art'},
  {title:'Logos & Identity', desc: 'Brand identity, logos for channels & businesses'},
  {title:'YouTube', desc: 'Thumbnails, channel art, thumbnails & community posts'},
  {title:'Social Media', desc: 'Designs for promo and campaign posts'},
  {title:'Pitch Decks', desc: 'PPT & pitch materials for films & business'},
  {title:'Portfolios', desc: 'Profiles & portfolios for filmmakers & businesses'},
  {title:'Content Strategy', desc: 'Content & marketing strategy guidance'},
]

export default function Services(){
  useEffect(()=>{ document.title = 'Gola Graphic — Services' }, [])
  return (
    <main className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Services</h1>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {SERVICES.map((s,i)=>(
            <div key={i} className="p-6 bg-white/5 rounded hover:translate-y-[-4px] transition">
              <div className="font-semibold text-lg">{s.title}</div>
              <div className="text-white/80 mt-2">{s.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
