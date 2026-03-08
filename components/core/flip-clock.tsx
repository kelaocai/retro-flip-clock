"use client"

import { useEffect, useRef, useState } from "react"
import FlipCard from "./flip-card"
import type { FlipClockProps, FlipClockTimeState } from "../../lib/types"

export default function FlipClock(props: FlipClockProps) {
  const {
    format = "24h",
    showSeconds = true,
    onTimeChange,
    containerClassName,
    cardWidth,
    cardHeight,
    animationDuration = 500,
    isImmersive = false,
  } = props

  const effectiveCardWidth =
    cardWidth ?? (isImmersive ? "w-[18vw] sm:w-[16vw] md:w-[14vw] lg:w-32" : "w-16 sm:w-20 md:w-24 lg:w-28")
  const effectiveCardHeight =
    cardHeight ?? (isImmersive ? "h-[51vh] sm:h-[45vh] md:h-[39vh] lg:h-[4.5rem]" : "h-24 sm:h-28 md:h-32 lg:h-40")

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
    let timeoutId: number | undefined

    const tick = () => {
      const now = new Date()
      let hours = now.getHours()

      if (format === "12h") {
        hours = hours % 12 || 12
      }

      const newTime: FlipClockTimeState = {
        hours: String(hours).padStart(2, "0"),
        minutes: String(now.getMinutes()).padStart(2, "0"),
        seconds: String(now.getSeconds()).padStart(2, "0"),
      }

      setTime((currentTime) => {
        const hoursChanged = currentTime.hours !== newTime.hours
        const minutesChanged = currentTime.minutes !== newTime.minutes
        const secondsChanged = currentTime.seconds !== newTime.seconds

        if (!hoursChanged && !minutesChanged && !secondsChanged) {
          return currentTime
        }

        prevTimeRef.current = {
          hours: hoursChanged ? currentTime.hours : prevTimeRef.current.hours,
          minutes: minutesChanged ? currentTime.minutes : prevTimeRef.current.minutes,
          seconds: secondsChanged ? currentTime.seconds : prevTimeRef.current.seconds,
        }

        onTimeChange?.(newTime)
        return newTime
      })

      const delay = 1000 - now.getMilliseconds()
      timeoutId = window.setTimeout(tick, delay)
    }

    tick()

    return () => {
      if (timeoutId !== undefined) {
        window.clearTimeout(timeoutId)
      }
    }
  }, [format, onTimeChange])

  return (
    <div className="perspective" style={{ perspective: "1200px" }}>
      <div
        className={`relative flex items-center justify-center ${
          isImmersive ? "gap-1 sm:gap-2 md:gap-4" : "gap-2 sm:gap-3 md:gap-6"
        } px-4 sm:px-6 md:px-10 py-6 sm:py-8 md:py-14 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] rounded-xl sm:rounded-2xl ${
          isImmersive ? "w-[92vw] max-w-[1000px]" : ""
        } ${containerClassName || ""}`}
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
            cardWidth={effectiveCardWidth}
            cardHeight={effectiveCardHeight}
            animationDuration={animationDuration}
          />
          <span className="text-[#888888] text-[10px] sm:text-xs md:text-sm tracking-widest font-mono font-bold">H</span>
        </div>

        <div className="flex flex-col items-center gap-1 sm:gap-3 px-0.5 sm:px-1">
          <svg width="20" height="60" viewBox="0 0 32 120" className="drop-shadow-lg sm:w-24 sm:h-120">
            <circle cx="16" cy="45" r="3" fill="#999999" />
            <circle cx="16" cy="75" r="3" fill="#999999" />
          </svg>
          <div className="w-3 sm:w-6 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent" />
        </div>

        <div className="flex flex-col items-center gap-1 sm:gap-3">
          <FlipCard
            value={time.minutes}
            prevValue={prevTimeRef.current.minutes}
            cardWidth={effectiveCardWidth}
            cardHeight={effectiveCardHeight}
            animationDuration={animationDuration}
          />
          <span className="text-[#888888] text-[10px] sm:text-xs md:text-sm tracking-widest font-mono font-bold">M</span>
        </div>

        {showSeconds && (
          <>
            <div className="flex flex-col items-center gap-1 sm:gap-3 px-0.5 sm:px-1">
              <svg width="20" height="60" viewBox="0 0 32 120" className="drop-shadow-lg sm:w-24 sm:h-120">
                <circle cx="16" cy="45" r="3" fill="#999999" />
                <circle cx="16" cy="75" r="3" fill="#999999" />
              </svg>
              <div className="w-3 sm:w-6 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent" />
            </div>

            <div className="flex flex-col items-center gap-1 sm:gap-3">
              <FlipCard
                value={time.seconds}
                prevValue={prevTimeRef.current.seconds}
                cardWidth={effectiveCardWidth}
                cardHeight={effectiveCardHeight}
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
