import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi, beforeEach } from 'vitest'

import Clock from './Clock'

describe('Clock', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  it('renders time for specified location', () => {
    const date = new Date('2023-27-12 00:00:00 UTC')
    vi.setSystemTime(date)
    render(<Clock location="Europe/Belgrade" />)

    expect(
      screen.getByText(
        date.toLocaleTimeString(undefined, {
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
          timeZone: 'Europe / Belgrade',
        }),
      ),
    ).toBeInTheDocument()
  })
})
