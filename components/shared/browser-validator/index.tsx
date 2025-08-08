"use client"

import React from "react"
import { Alert } from "antd"

export function BrowserValidator() {
  const [warn, setWarn] = React.useState(false)
  React.useEffect(() => {
    const isOld =
      !("fetch" in window) ||
      !("IntersectionObserver" in window) ||
      !("BigInt" in window)
    setWarn(isOld)
  }, [])
  if (!warn) return null
  return (
    <div className="p-3">
      <Alert
        type="warning"
        showIcon
        message="Navegador no soportado completamente"
        description="Actualiza tu navegador para una mejor experiencia."
      />
    </div>
  )
}
