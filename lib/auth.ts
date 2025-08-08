export type Session = {
  userId: string
  email: string
  nombre?: string
  apellido?: string
  role: "admin"
}

export function getSession(): Session | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem("session")
    return raw ? (JSON.parse(raw) as Session) : null
  } catch {
    return null
  }
}
