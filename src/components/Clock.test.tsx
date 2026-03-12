import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'

import Clock from './Clock'

describe('Clock', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders time for specified location', () => {
    const date = new Date('2023-12-27T00:00:00.000Z')
    vi.setSystemTime(date)
    render(<Clock location="Europe/Belgrade" />)

    expect(
      screen.getByText(
        date.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Europe/Belgrade',
        }),
      ),
    ).toBeInTheDocument()
  })
})
