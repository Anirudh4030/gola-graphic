// src/sanityClient.js
import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

// Replace these with your Sanity project ID & dataset
export const client = createClient({
  projectId: '4gqbvdpz', // get from sanity manage
  dataset: 'production',        // usually 'production'
  apiVersion: '2025-09-22',     // today’s date
  useCdn: true,                 // true = cached results
});

// helper function to generate image URLs
const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
