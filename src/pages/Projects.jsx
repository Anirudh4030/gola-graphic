// src/pages/Projects.jsx
import React, { useState, useEffect } from 'react'
import { client, urlFor } from '../sanityClient'

const TABS = [
  { id: 'posters', title: 'Film Posters' },
  { id: 'titles', title: 'Title Designs' },
  { id: 'logos', title: 'Logos' },
  { id: 'youtube', title: 'YouTube' },
  { id: 'social', title: 'Social Media' },
  { id: 'pitch', title: 'Pitch Decks' },
]

export default function Projects() {
  const [tab, setTab] = useState(TABS[0].id)
  const [projects, setProjects] = useState([])

  useEffect(() => {
    document.title = 'Gola Graphic — Projects'
  }, [])

  // Fetch projects from Sanity
  useEffect(() => {
    client
      .fetch(`*[_type == "project" && category == $tab]{
        title,
        description,
        image,
        link
      }`, { tab })
      .then((data) => setProjects(data))
      .catch(console.error)
  }, [tab])

  return (
    <main className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Projects</h1>

        <div className="mt-6 flex flex-wrap gap-2">
          {TABS.map((t) => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2 rounded ${
                tab === t.id
                  ? 'bg-brandRed text-white'
                  : 'bg-white/5 text-white/90 hover:bg-white/10'
              }`}
            >
              {t.title}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {projects.length > 0 ? (
            projects.map((project) => (
              <div key={project.title} className="bg-white/5 p-6 rounded shadow-lg">
                {project.image && (
                  <img
                    src={urlFor(project.image).width(600).url()}
                    alt={project.title}
                    className="rounded-lg mb-4"
                  />
                )}
                <h3 className="font-semibold">{project.title}</h3>
                <p className="text-white/80 mt-2">{project.description}</p>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-red-400 hover:underline mt-2 block"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-white/60 col-span-full">No projects in this category yet.</p>
          )}
        </div>
      </div>
    </main>
  )
}
