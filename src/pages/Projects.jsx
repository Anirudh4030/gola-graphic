// src/pages/Projects.jsx
import React, { useState, useEffect } from 'react'
import { client, urlFor } from '../sanityClient'

export default function Projects() {
  const [projects, setProjects] = useState([])
  const [categories, setCategories] = useState([])
  const [activeTab, setActiveTab] = useState('')

  useEffect(() => {
    document.title = 'Gola Graphic — Projects'
  }, [])

  // Fetch all projects and auto-detect categories
  useEffect(() => {
    client
      .fetch(`*[_type == "project"]{
        title,
        description,
        image,
        link,
        category
      }`)
      .then((data) => {
        setProjects(data)

        // Extract unique categories
        const uniqueCats = [...new Set(data.map(p => p.category))].filter(Boolean)
        setCategories(uniqueCats)

        // Set first category as active by default
        if (uniqueCats.length > 0 && !activeTab) setActiveTab(uniqueCats[0])
      })
      .catch(console.error)
  }, )

  const filteredProjects = projects.filter(p => p.category === activeTab)

  return (
    <main className="pt-20 min-h-screen bg-black text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold">Projects</h1>

        {/* Tabs */}
        <div className="mt-6 flex flex-wrap gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveTab(cat)}
              className={`px-4 py-2 rounded ${
                activeTab === cat
                  ? 'bg-brandRed text-white'
                  : 'bg-white/5 text-white/90 hover:bg-white/10'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project) => (
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
                    className="text-red-800 hover:underline mt-2 block"
                  >
                    View Project →
                  </a>
                )}
              </div>
            ))
          ) : (
            <p className="text-white/60 col-span-full">Content is loading, Please Wait...</p>
          )}
        </div>
      </div>
    </main>
  )
}
