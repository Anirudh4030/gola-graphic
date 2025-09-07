// src/pages/Projects.jsx
import React, { useState, useEffect } from 'react'

const TABS = [
  {id:'posters', title: 'Film Posters'},
  {id:'titles', title: 'Title Designs'},
  {id:'logos', title: 'Logos'},
  {id:'youtube', title: 'YouTube'},
  {id:'social', title: 'Social Media'},
  {id:'pitch', title: 'Pitch Decks'},
]

export default function Projects(){
  const [tab, setTab] = useState(TABS[0].id)
  useEffect(()=>{ document.title = 'Gola Graphic — Projects' }, [])

  return (
    <main className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Projects</h1>
        <div className="mt-6 flex flex-wrap gap-2">
          {TABS.map(t => (
            <button key={t.id} onClick={()=>setTab(t.id)}
              className={`px-4 py-2 rounded ${tab===t.id ? 'bg-brandRed text-white' : 'bg-white/5 text-white/90 hover:bg-white/10'}`}>
              {t.title}
            </button>
          ))}
        </div>

        <div className="mt-8">
          {/* Replace below with real project template per tab */}
          <div className="bg-white/5 p-6 rounded">
            <h3 className="font-semibold capitalize">{tab.replace('-', ' ')}</h3>
            <p className="text-white/80 mt-2">Project gallery & descriptions for <strong>{tab}</strong> go here.</p>
          </div>
        </div>
      </div>
    </main>
  )
}
