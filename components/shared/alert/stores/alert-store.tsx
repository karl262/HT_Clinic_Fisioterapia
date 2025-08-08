"use client"

import React from "react"

export type AlertKind = "success" | "info" | "warning" | "error"
export type AlertState = {
  open: boolean
  message?: string
  description?: string
  type?: AlertKind
}
export type AlertStore = AlertState & {
  show: (s: Omit<AlertState, "open">) => void
  hide: () => void
}

const AlertContext = React.createContext<AlertStore | null>(null)

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = React.useState<AlertState>({ open: false })
  const value = React.useMemo<AlertStore>(
    () => ({
      ...state,
      show: (s) => setState({ ...s, open: true }),
      hide: () => setState({ open: false }),
    }),
    [state]
  )
  return <AlertContext.Provider value={value}>{children}</AlertContext.Provider>
}

export function useAlertStore() {
  const ctx = React.useContext(AlertContext)
  if (!ctx) throw new Error("useAlertStore must be used within AlertProvider")
  return ctx
}
