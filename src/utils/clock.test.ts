import { describe, expect, it } from 'vitest'

import { formatTime } from './clock'

describe('formatTime', () => {
  it('formats time correctly for Europe/Belgrade timezone', () => {
    // 2026-08-24T10:30:00Z is 12:30 in CEST (UTC+2)
    const fixedDate = new Date('2026-08-24T10:30:00.000Z')
    const result = formatTime(fixedDate, 'Europe/Belgrade')

    expect(result).toBe('12:30')
  })

  it('formats time correctly for UTC timezone', () => {
    const fixedDate = new Date('2026-08-24T10:30:00.000Z')
    const result = formatTime(fixedDate, 'UTC')

    expect(result).toBe('10:30')
  })

  it('returns fallback string when timeZone is empty', () => {
    const fixedDate = new Date('2026-08-24T10:30:00.000Z')
    const result = formatTime(fixedDate, '')

    expect(result).toBe('--:--')
  })
})
