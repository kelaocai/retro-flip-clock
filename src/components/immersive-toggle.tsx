"use client"

export default function ImmersiveToggle({
  isImmersive,
  onToggle,
}: {
  isImmersive: boolean
  onToggle: (isImmersive: boolean) => void
}) {
  const handleToggle = () => {
    const newState = !isImmersive
    onToggle(newState)

    // Try to enter fullscreen and lock orientation to landscape on supported mobile browsers
    if (newState && typeof document !== "undefined") {
      const root = document.documentElement as HTMLElement & {
        webkitRequestFullscreen?: () => Promise<void> | void
      }

      const requestFullscreen =
        root.requestFullscreen?.bind(root) ?? root.webkitRequestFullscreen?.bind(root)

      if (requestFullscreen) {
        Promise.resolve(requestFullscreen())
          .then(() => {
            const orientation = (screen as any).orientation
            if (orientation && typeof orientation.lock === "function") {
              orientation.lock("landscape").catch(() => {
                // Orientation lock is best-effort and may be denied by the browser or OS
              })
            }
          })
          .catch(() => {
            console.log("Fullscreen request was denied")
          })
      }
    }
  }

  if (isImmersive) {
    return null
  }

  return (
    <button
      onClick={handleToggle}
      className="fixed top-6 right-6 z-50 px-4 py-2 rounded-lg backdrop-blur-md transition-all duration-300 font-semibold text-sm"
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
