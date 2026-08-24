import { defineCollection } from 'astro:content'

import { noteSchema } from './schema'

const notes = defineCollection({
  type: 'content',
  schema: noteSchema,
})

// Keys should match your collection directory name in "src/content"
export const collections = { notes }
