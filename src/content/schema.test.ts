import { describe, expect, it } from 'vitest'

import { noteSchema } from './schema'

describe('noteSchema validation', () => {
  it('validates minimal valid note frontmatter', () => {
    const validData = {
      title: 'Testing Astro Notes',
      date: new Date('2026-08-24T12:00:00Z'),
    }

    const result = noteSchema.safeParse(validData)
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.title).toBe('Testing Astro Notes')
      expect(result.data.date).toBeInstanceOf(Date)
    }
  })

  it('validates complete note frontmatter with image and tags', () => {
    const fullData = {
      title: 'Full Note with Image',
      date: new Date('2026-08-24T12:00:00Z'),
      description: 'A detailed overview of note capabilities.',
      image: {
        url: '/note-images/test.png',
        alt: 'Test note banner',
        width: 1200,
        height: 630,
      },
      tags: ['astro', 'typescript', 'testing'],
    }

    const result = noteSchema.safeParse(fullData)
    expect(result.success).toBe(true)
    if (result.success) {
      expect(result.data.tags).toHaveLength(3)
      expect(result.data.image?.width).toBe(1200)
    }
  })

  it('fails validation when title is missing', () => {
    const invalidData = {
      date: new Date('2026-08-24T12:00:00Z'),
    }

    const result = noteSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('fails validation when date is not a Date instance', () => {
    const invalidData = {
      title: 'Invalid Date Type',
      date: '2026-08-24', // string instead of Date object
    }

    const result = noteSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })

  it('fails validation when image is missing alt attribute', () => {
    const invalidData = {
      title: 'Missing Image Alt',
      date: new Date('2026-08-24T12:00:00Z'),
      image: {
        url: '/test.png',
      },
    }

    const result = noteSchema.safeParse(invalidData)
    expect(result.success).toBe(false)
  })
})
