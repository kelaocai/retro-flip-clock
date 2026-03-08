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

        const orientation = (screen as any).orientation
        if (orientation && typeof orientation.unlock === "function") {
          try {
            orientation.unlock()
          } catch {
            // Some browsers may not support unlock or may ignore it
          }
        }
      }
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  const handleExitImmersive = () => {
    setIsImmersive(false)

    if (typeof document !== "undefined") {
      if (document.fullscreenElement && document.exitFullscreen) {
        document.exitFullscreen().catch(() => {
          // Exit fullscreen may be denied; fall back to state-only change
        })
      }

      const orientation = (screen as any).orientation
      if (orientation && typeof orientation.unlock === "function") {
        try {
          orientation.unlock()
        } catch {
          // Best-effort only
        }
      }
    }
  }

  if (!mounted) return null

  return (
    <>
      <ImmersiveToggle isImmersive={isImmersive} onToggle={setIsImmersive} />

      {isImmersive ? (
        <div className="fixed inset-0 bg-black flex items-center justify-center overflow-hidden">
          <div className="fixed bottom-5 left-0 right-0 flex justify-center z-50">
            <button
              onClick={handleExitImmersive}
              className="h-9 w-9 rounded-full flex items-center justify-center backdrop-blur-md transition-all duration-300 border border-white/15 text-gray-200 bg-white/5 hover:bg-white/10 active:bg-white/15 shadow-sm"
            >
              <span className="sr-only">Exit full screen</span>
              <svg
                aria-hidden="true"
                viewBox="0 0 24 24"
                className="h-4 w-4 text-gray-200/80"
              >
                <path
                  d="M7 10.5L12 15.5L17 10.5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
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
          <div className="flex flex-col items-center gap-8 md:gap-12 w-full max-w-5xl xl:max-w-6xl">
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
