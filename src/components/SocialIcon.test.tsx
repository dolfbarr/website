import { render } from '@testing-library/react'
import { Social } from '@utils/types'
import { describe, expect, it } from 'vitest'

import SocialIcon from './SocialIcon'

describe('SocialIcon', () => {
  it('renders GitHub icon correctly', () => {
    const { container } = render(<SocialIcon icon={Social.Github} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.getAttribute('width')).toBe('24')
    expect(svg?.getAttribute('height')).toBe('24')
  })

  it('renders Twitter icon with custom size', () => {
    const { container } = render(<SocialIcon icon={Social.Twitter} size={16} />)
    const svg = container.querySelector('svg')
    expect(svg).toBeInTheDocument()
    expect(svg?.getAttribute('width')).toBe('16')
    expect(svg?.getAttribute('height')).toBe('16')
  })

  it('renders Email and LinkedIn icons', () => {
    const { container: emailContainer } = render(
      <SocialIcon icon={Social.Email} />,
    )
    expect(emailContainer.querySelector('svg')).toBeInTheDocument()

    const { container: linkedInContainer } = render(
      <SocialIcon icon={Social.LinkedIn} />,
    )
    expect(linkedInContainer.querySelector('svg')).toBeInTheDocument()
  })

  it('returns null safely when an unknown icon is passed', () => {
    const { container } = render(
      <SocialIcon icon={'nonexistent' as unknown as Social} />,
    )
    expect(container.firstChild).toBeNull()
  })
})
