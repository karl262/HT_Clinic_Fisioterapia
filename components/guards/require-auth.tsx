"use client"

import { useEffect, useState } from "react"
import { useLocation, useNavigate } from "react-router-dom"

export default function RequireAuth({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate()
  const location = useLocation()
  const [ready, setReady] = useState(false)

  useEffect(() => {
    const raw = localStorage.getItem("session")
    if (!raw) {
      const nextUrl = encodeURIComponent(location.pathname + location.search)
      navigate(`/login?next=${nextUrl}`, { replace: true })
      return
    }
    setReady(true)
  }, [navigate, location])

  if (!ready) return null
  return <>{children}</>
}
