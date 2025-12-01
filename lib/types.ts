export interface FlipCardProps {
  value: string
  prevValue: string
  animationDuration?: number
  cardWidth?: string
  cardHeight?: string
  fontSize?: number
  textColor?: string
  backgroundColor?: string
}

export interface FlipClockProps {
  format?: "12h" | "24h"
  showSeconds?: boolean
  onTimeChange?: (time: { hours: string; minutes: string; seconds: string }) => void
  containerClassName?: string
  cardWidth?: string
  cardHeight?: string
  animationDuration?: number
}

export interface FlipClockTimeState {
  hours: string
  minutes: string
  seconds: string
}
