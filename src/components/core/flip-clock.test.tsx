import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest'
import { render, screen } from '@testing-library/react'
import FlipClock from './flip-clock'

// Mock Date to control time
const mockDate = new Date(2024, 0, 15, 12, 30, 45)

describe('FlipClock', () => {
  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(mockDate)
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('renders FlipClock component', () => {
    render(<FlipClock />)
    expect(screen.getByText('H')).toBeInTheDocument()
    expect(screen.getByText('M')).toBeInTheDocument()
    expect(screen.getByText('S')).toBeInTheDocument()
  })

  it('shows seconds by default', () => {
    render(<FlipClock />)
    expect(screen.getByText('S')).toBeInTheDocument()
  })

  it('hides seconds when showSeconds is false', () => {
    render(<FlipClock showSeconds={false} />)
    expect(screen.queryByText('S')).not.toBeInTheDocument()
  })

  it('calls onTimeChange callback when time changes', () => {
    const onTimeChange = vi.fn()
    render(<FlipClock onTimeChange={onTimeChange} />)

    // Trigger the time update by advancing timers
    vi.advanceTimersByTime(1000)

    expect(onTimeChange).toHaveBeenCalled()
  })

  it('accepts custom container class', () => {
    render(<FlipClock containerClassName="custom-class" />)
    // The containerClassName is applied to the inner div
    const container = document.querySelector('.custom-class')
    expect(container).toBeInTheDocument()
  })

  it('accepts custom card dimensions', () => {
    render(
      <FlipClock
        cardWidth="w-32"
        cardHeight="h-40"
      />
    )
    expect(screen.getByText('H')).toBeInTheDocument()
  })

  it('accepts custom animation duration', () => {
    render(<FlipClock animationDuration={1000} />)
    expect(screen.getByText('H')).toBeInTheDocument()
  })
})
