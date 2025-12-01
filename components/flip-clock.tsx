"use client"

import { useEffect, useRef, useState } from "react"
import FlipCard from "./flip-card"

export default function FlipClock({ isImmersive = false }) {
  const [time, setTime] = useState({
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  const prevTimeRef = useRef({
    hours: "00",
    minutes: "00",
    seconds: "00",
  })

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const newTime = {
        hours: String(now.getHours()).padStart(2, "0"),
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
          return newTime
        }
        return currentTime
      })
    }

    updateTime()
    const interval = setInterval(updateTime, 1000)

    return () => clearInterval(interval)
  }, [])

  const containerClass = isImmersive
    ? "flex items-center justify-center gap-6 md:gap-10 lg:gap-14"
    : "flex items-center justify-center gap-4 md:gap-6 px-8 md:px-12 py-12 md:py-16 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] rounded-2xl"

  const containerStyle = isImmersive
    ? {}
    : {
        boxShadow: `
          0 40px 100px rgba(0, 0, 0, 0.9),
          inset 0 1px 0 rgba(255, 255, 255, 0.03),
          inset 0 -8px 20px rgba(0, 0, 0, 0.8)
        `,
        border: "1px solid rgba(255, 255, 255, 0.05)",
      }

  return (
    <div className="perspective" style={{ perspective: "1200px" }}>
      <div className={containerClass} style={containerStyle}>
        {!isImmersive && (
          <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-b from-[#333333] to-transparent rounded-t-2xl" />
        )}

        {!isImmersive && (
          <div className="absolute bottom-0 left-0 right-0 h-4 bg-gradient-to-t from-[#0a0a0a] to-transparent rounded-b-2xl" />
        )}

        {/* Hours */}
        <div className="flex flex-col items-center gap-3">
          <FlipCard value={time.hours} prevValue={prevTimeRef.current.hours} isImmersive={isImmersive} />
          {!isImmersive && (
            <span className="text-[#888888] text-xs md:text-sm tracking-widest font-mono font-bold">H</span>
          )}
        </div>

        {/* Colon separator */}
        <div className="flex flex-col items-center gap-3 px-1">
          <svg
            width={isImmersive ? 48 : 32}
            height={isImmersive ? 180 : 120}
            viewBox="0 0 32 120"
            className="drop-shadow-lg"
          >
            <circle cx="16" cy="30" r="3" fill="#999999" filter="url(#glowFilter)" />
            <circle cx="16" cy="90" r="3" fill="#999999" filter="url(#glowFilter)" />
          </svg>
          {!isImmersive && <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent" />}
        </div>

        {/* Minutes */}
        <div className="flex flex-col items-center gap-3">
          <FlipCard value={time.minutes} prevValue={prevTimeRef.current.minutes} isImmersive={isImmersive} />
          {!isImmersive && (
            <span className="text-[#888888] text-xs md:text-sm tracking-widest font-mono font-bold">M</span>
          )}
        </div>

        {/* Colon separator */}
        <div className="flex flex-col items-center gap-3 px-1">
          <svg
            width={isImmersive ? 48 : 32}
            height={isImmersive ? 180 : 120}
            viewBox="0 0 32 120"
            className="drop-shadow-lg"
          >
            <circle cx="16" cy="30" r="3" fill="#999999" filter="url(#glowFilter)" />
            <circle cx="16" cy="90" r="3" fill="#999999" filter="url(#glowFilter)" />
          </svg>
          {!isImmersive && <div className="w-6 h-px bg-gradient-to-r from-transparent via-[#444444] to-transparent" />}
        </div>

        {/* Seconds */}
        <div className="flex flex-col items-center gap-3">
          <FlipCard value={time.seconds} prevValue={prevTimeRef.current.seconds} isImmersive={isImmersive} />
          {!isImmersive && (
            <span className="text-[#888888] text-xs md:text-sm tracking-widest font-mono font-bold">S</span>
          )}
        </div>
      </div>
    </div>
  )
}
