import { describe, expect, it } from 'vitest'

import { getReadingTime } from './readingTime'

describe('getReadingTime', () => {
  it('returns "1 min read" for empty or non-string inputs', () => {
    expect(getReadingTime('')).toBe('1 min read')
    expect(getReadingTime(null as unknown as string)).toBe('1 min read')
    expect(getReadingTime(undefined)).toBe('1 min read')
  })

  it('returns "1 min read" for short texts under 200 words', () => {
    const text = 'Hello world! This is a quick note about frontend engineering.'
    expect(getReadingTime(text)).toBe('1 min read')
  })

  it('calculates reading time correctly for longer texts', () => {
    const text = Array(450).fill('word').join(' ')
    expect(getReadingTime(text)).toBe('3 min read')
  })

  it('ignores code blocks and markdown symbols in word count', () => {
    const markdown = `
      # Header
      
      Here is some text with **bold** and _italic_ formatting.
      
      \`\`\`ts
      const bigCodeBlock = Array(500).fill('code');
      \`\`\`
    `
    expect(getReadingTime(markdown)).toBe('1 min read')
  })

  it('supports custom wordsPerMinute', () => {
    const text = Array(150).fill('word').join(' ')
    expect(getReadingTime(text, 100)).toBe('2 min read')
  })
})
