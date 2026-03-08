import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import FlipCard from './flip-card'

describe('FlipCard', () => {
  beforeEach(() => {
    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders with initial value', () => {
    render(<FlipCard value="5" prevValue="4" />)
    expect(screen.getAllByText('5')).toHaveLength(2)
  })

  it('applies custom width and height classes', () => {
    render(
      <FlipCard
        value="5"
        prevValue="4"
        cardWidth="w-32"
        cardHeight="h-40"
      />
    )
    // Get the outer container (has relative class)
    const container = document.querySelector('.relative')
    expect(container).toHaveClass('w-32', 'h-40')
  })

  it('applies custom background color', () => {
    render(
      <FlipCard
        value="5"
        prevValue="4"
        backgroundColor="#ff0000"
      />
    )
    const container = document.querySelector('.absolute')
    expect(container).toHaveStyle({ background: expect.stringContaining('#ff0000') })
  })

  it('applies custom text color', () => {
    render(
      <FlipCard
        value="5"
        prevValue="4"
        textColor="#ff0000"
      />
    )
    const svg = screen.getAllByText('5')[0].closest('svg')
    expect(svg).toBeInTheDocument()
  })

  it('triggers flip animation when value changes', () => {
    const { rerender } = render(<FlipCard value="5" prevValue="4" animationDuration={500} />)

    expect(screen.getAllByText('5')).toHaveLength(2)

    rerender(<FlipCard value="6" prevValue="5" animationDuration={500} />)

    vi.advanceTimersByTime(500)

    expect(screen.getAllByText('6')).toHaveLength(2)
  })
})
