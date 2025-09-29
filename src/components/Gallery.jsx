// src/components/Gallery.jsx
import { useState, useEffect } from 'react'
import { client, urlFor } from '../sanityClient'

export default function Gallery() {
  const [images, setImages] = useState([])

  useEffect(() => {
    client
      .fetch(`*[_type == "gallery"]{
        title,
        image,
        alt
      }`)
      .then((data) => setImages(data))
      .catch(console.error)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
    
      {images.map((item, i) => (
        
        <div key={i} className="p-4 border rounded-lg shadow bg-white/5"> <br />
          {item.image && (
            <img
              src={urlFor(item.image).width(500).url()}
              alt={item.alt || item.title}
              className="w-full h-64 object-cover rounded mb-2"
            />
          )}
          <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
        </div>
      ))}
    </div>
  )
}
