"use client"

import React from "react"

export function Confetti({ fire = false }: { fire?: boolean }) {
  React.useEffect(() => {
    let mounted = true
    async function run() {
      if (!fire) return
      const confetti = (await import("canvas-confetti")).default
      if (mounted) {
        confetti({ particleCount: 120, spread: 70, origin: { y: 0.6 } })
      }
    }
    run()
    return () => {
      mounted = false
    }
  }, [fire])
  return null
}
