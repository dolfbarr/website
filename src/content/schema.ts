import { z } from 'astro/zod'

export const noteSchema = z.object({
  title: z.string(),
  date: z.date(),
  description: z.string().optional(),
  image: z
    .object({
      url: z.string(),
      alt: z.string(),
      width: z.number().optional(),
      height: z.number().optional(),
    })
    .optional(),
  tags: z.array(z.string()).optional(),
})
