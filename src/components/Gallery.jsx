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
    <div className="pt-24 mt-8 flex flex-wrap gap-8 justify-start p-8"> {/* increased gap and padding */}
      {images.length > 0 ? (
        images.map((item) => (
          <div
            key={item.title}
            className="rounded shadow-lg bg-white/5 p-4" // increased padding
          >
            {item.image && (
              <img
                src={urlFor(item.image).url()}
                alt={item.alt || item.title}
                className="block rounded"
                style={{
                  display: 'block',
                  width: 'auto',
                  maxWidth: '100%',
                  height: 'auto',
                }}
              />
            )}
            <h3 className="font-semibold text-white mt-2 px-2">{item.title}</h3>
          </div>
        ))
      ) : (
        <p className="text-white/60">Content is loading, Please Wait...</p>
      )}
    </div>
  )
}
