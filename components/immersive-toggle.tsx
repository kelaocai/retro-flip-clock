"use client"

import { useState } from "react"

export default function ImmersiveToggle({ onToggle }: { onToggle: (isImmersive: boolean) => void }) {
  const [isImmersive, setIsImmersive] = useState(false)

  const handleToggle = () => {
    const newState = !isImmersive
    setIsImmersive(newState)
    onToggle(newState)

    // Try to enter fullscreen
    if (newState && document.documentElement.requestFullscreen) {
      document.documentElement.requestFullscreen().catch(() => {
        console.log("Fullscreen request was denied")
      })
    }
  }

  return (
    <button
      onClick={handleToggle}
      className={`fixed top-6 right-6 z-50 px-4 py-2 rounded-lg backdrop-blur-md transition-all duration-300 font-semibold text-sm ${
        isImmersive ? "hidden" : ""
      }`}
      style={{
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        border: "1px solid rgba(255, 255, 255, 0.2)",
        color: "#888888",
      }}
      title={isImmersive ? "Exit Immersive Mode" : "Enter Immersive Mode"}
    >
      Full
    </button>
  )
}
