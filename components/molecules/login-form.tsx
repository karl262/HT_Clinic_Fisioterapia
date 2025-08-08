"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type Props = {
  onSuccess?: () => void
}

type User = {
  id: string
  email: string
  password: string
  nombre: string
  apellido: string
}

export default function LoginForm({ onSuccess }: Props) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    setTimeout(() => {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]")
      const user = users.find((u) => u.email === email && u.password === password)
      if (!user) {
        setError("Credenciales inválidas.")
        setLoading(false)
        return
      }
      localStorage.setItem(
        "session",
        JSON.stringify({ userId: user.id, email: user.email, nombre: user.nombre, apellido: user.apellido, role: "admin" })
      )
      setLoading(false)
      onSuccess?.()
    }, 400)
  }

  return (
    <form className="space-y-4" onSubmit={submit}>
      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="password">Contraseña</Label>
        <Input id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Ingresando..." : "Iniciar sesión"}
      </Button>
    </form>
  )
}
