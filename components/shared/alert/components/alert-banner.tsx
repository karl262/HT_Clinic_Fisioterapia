"use client"

import { Alert as AntAlert } from "antd"
import { useAlert } from "../hooks/use-alert"

export function AlertBanner() {
  const { open, message, description, type, hide } = useAlert()
  if (!open) return null
  return (
    <div className="mx-auto w-full max-w-5xl p-3">
      <AntAlert
        showIcon
        closable
        type={type}
        message={message}
        description={description}
        onClose={hide}
      />
    </div>
  )
}
