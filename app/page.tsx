"use client"

import { useEffect, useState } from "react"
import FlipClock from "@/components/core/flip-clock"
import ImmersiveToggle from "@/components/immersive-toggle"

export default function Page() {
  const [mounted, setMounted] = useState(false)
  const [isImmersive, setIsImmersive] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Handle fullscreen changes
    const handleFullscreenChange = () => {
      if (!document.fullscreenElement) {
        setIsImmersive(false)
      }
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  if (!mounted) return null

  return (
    <>
      <ImmersiveToggle onToggle={setIsImmersive} />

      {isImmersive ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
          <div className="fixed inset-0 flex items-end justify-center pb-8 pointer-events-none">
            <div className="text-center">
              <p className="text-gray-500 text-sm font-light tracking-wider">Press ESC to exit</p>
            </div>
          </div>
          <div className="w-full h-full flex items-center justify-center" style={{ perspective: "2000px" }}>
            <FlipClock isImmersive={true} />
          </div>
        </div>
      ) : (
        <div
          className="min-h-screen flex items-center justify-center px-4 md:px-8"
          style={{
            background: "linear-gradient(135deg, #2a2620 0%, #3d3530 50%, #2a2620 100%)",
          }}
        >
          <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-4xl">
            <div className="text-center">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-retro-gold mb-2 tracking-widest font-mono drop-shadow-lg">
                FLIP CLOCK
              </h1>
              <p className="text-retro-tan text-sm md:text-lg lg:text-xl tracking-wider font-light">
                Classic Mechanical Timepiece
              </p>
              <div className="w-24 md:w-32 h-px bg-gradient-to-r from-transparent via-retro-gold to-transparent mt-4 mx-auto" />
            </div>

            <div className="w-full flex justify-center overflow-hidden">
              <FlipClock />
            </div>

            {/* Footer */}
            <div className="text-center mt-4 md:mt-8">
              <p className="text-retro-tan text-xs md:text-sm tracking-widest">© 1976 — MECHANICAL ENGINEERING</p>
              <p className="text-retro-brown text-xs mt-2">Made with analog precision</p>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
