"use client"

import { useEffect, useRef, useState } from "react"
import FlipCard from "./flip-card"
import type { FlipClockProps, FlipClockTimeState } from "../../lib/types"

export default function FlipClock({
  format = "24h",
  showSeconds = true,
  onTimeChange,
  containerClassName,
  cardWidth = "w-16 sm:w-20 md:w-24 lg:w-28",
  cardHeight = "h-24 sm:h-28 md:h-32 lg:h-40",
  animationDuration = 500,
  isImmersive = false,
}: FlipClockProps) {
  const [time, setTime] = useState<FlipClockTimeState>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  const prevTimeRef = useRef<FlipClockTimeState>({
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      let hours = now.getHours()

      if (format === "12h") {
        hours = hours % 12 || 12
      }

      const newTime = {
        hours: String(hours).padStart(2, "0"),
        minutes: String(now.getMinutes()).padStart(2, "0"),
        seconds: String(now.getSeconds()).padStart(2, "0"),
      }

      setTime((currentTime) => {
        if (
          currentTime.hours !== newTime.hours ||
          currentTime.minutes !== newTime.minutes ||
          currentTime.seconds !== newTime.seconds
        ) {
          prevTimeRef.current = { ...currentTime }
          onTimeChange?.(newTime)
          return newTime
        }
        return currentTime
      })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [format, onTimeChange])

  return (
    <div className="perspective" style={{ perspective: "1200px" }}>
      <div
        className={`relative flex items-center justify-center gap-2 sm:gap-3 md:gap-6 px-4 sm:px-6 md:px-12 py-6 sm:py-8 md:py-16 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] rounded-xl sm:rounded-2xl ${containerClassName || ""}`}
        style={{
          boxShadow: `
            0 18px 40px rgba(0, 0, 0, 0.45),
            0 10px 26px rgba(0, 0, 0, 0.35),
            0 0 40px rgba(0, 0, 0, 0.28),
            0 0 0 1px rgba(255, 255, 255, 0.02),
            inset 0 1px 0 rgba(255, 255, 255, 0.06),
            inset 0 -4px 10px rgba(0, 0, 0, 0.55)
          `,
          border: "1px solid rgba(255, 255, 255, 0.05)",
        }}
      >
        <div className="absolute top-0 left-0 right-0 h-2 sm:h-3 bg-gradient-to-b from-[#333333] to-transparent rounded-t-xl sm:rounded-t-2xl" />
        <div className="absolute bottom-0 left-0 right-0 h-3 sm:h-4 bg-gradient-to-t from-[#0a0a0a] to-transparent rounded-b-xl sm:rounded-b-2xl" />

        <div className="flex flex-col items-center gap-1 sm:gap-3">
          <FlipCard
            value={time.hours}
            prevValue={prevTimeRef.current.hours}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            animationDuration={animationDuration}
          />
          <span className="text-[#888888] text-[10px] sm:text-xs md:text-sm tracking-widest font-mono font-bold">H</span>
        </div>

        <div className="flex flex-col items-center gap-1 sm:gap-3 px-0.5 sm:px-1">
          <svg width="20" height="60" viewBox="0 0 32 120" className="drop-shadow-lg sm:w-24 sm:h-120">
            <circle cx="16" cy="30" r="3" fill="#999999" />
            <circle cx="16" cy="90" r="3" fill="#999999" />
          </svg>
          <div className="w-3 sm:w-6 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent" />
        </div>

        <div className="flex flex-col items-center gap-1 sm:gap-3">
          <FlipCard
            value={time.minutes}
            prevValue={prevTimeRef.current.minutes}
            cardWidth={cardWidth}
            cardHeight={cardHeight}
            animationDuration={animationDuration}
          />
          <span className="text-[#888888] text-[10px] sm:text-xs md:text-sm tracking-widest font-mono font-bold">M</span>
        </div>

        {showSeconds && (
          <>
            <div className="flex flex-col items-center gap-1 sm:gap-3 px-0.5 sm:px-1">
              <svg width="20" height="60" viewBox="0 0 32 120" className="drop-shadow-lg sm:w-24 sm:h-120">
                <circle cx="16" cy="30" r="3" fill="#999999" />
                <circle cx="16" cy="90" r="3" fill="#999999" />
              </svg>
              <div className="w-3 sm:w-6 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent" />
            </div>

            <div className="flex flex-col items-center gap-1 sm:gap-3">
              <FlipCard
                value={time.seconds}
                prevValue={prevTimeRef.current.seconds}
                cardWidth={cardWidth}
                cardHeight={cardHeight}
                animationDuration={animationDuration}
              />
              <span className="text-[#888888] text-[10px] sm:text-xs md:text-sm tracking-widest font-mono font-bold">S</span>
            </div>
          </>
        )}
      </div>
    </div>
  )
}
