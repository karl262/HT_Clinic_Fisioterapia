"use client"

import React from "react"
import { Alert } from "antd"

export function UpdateAlert({
  current,
  latest,
  onReload,
}: {
  current: string
  latest: string
  onReload?: () => void
}) {
  if (!current || !latest || current === latest) return null
  return (
    <div className="p-3">
      <Alert
        type="info"
        showIcon
        message={`Nueva versión disponible (${latest})`}
        description={
          <span>
            Estás usando {current}.{" "}
            <a onClick={onReload}>Recargar para actualizar</a>
          </span>
        }
      />
    </div>
  )
}
