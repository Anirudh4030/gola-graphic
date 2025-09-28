import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

export const client = createClient({
  projectId: "4gqbvdpz",   // ✅ replace with your Sanity project ID
  dataset: "production",          // ✅ default is production
  apiVersion: "2025-09-22",       // today’s date
  useCdn: true,                   // true for cached read
})

const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source)
