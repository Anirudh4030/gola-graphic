// src/components/Gallery.jsx
import { useState, useEffect } from "react";

// Import all JSON files from src/data/gallery
const galleryFiles = import.meta.glob("/src/data/gallery/*.json", { eager: true });

export default function Gallery() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const loaded = Object.values(galleryFiles);
    setItems(loaded);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-6">
      {items.map((item, i) => (
        <div key={i} className="p-4 border rounded-lg shadow">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-64 object-cover rounded"
          />
          <h3 className="mt-2 text-xl font-bold">{item.title}</h3>
          <p className="text-gray-600">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
