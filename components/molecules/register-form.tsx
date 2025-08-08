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
  nombre: string
  apellido: string
  email: string
  telefono?: string
  password: string
}

export default function RegisterForm({ onSuccess }: Props) {
  const [form, setForm] = useState({
    nombre: "",
    apellido: "",
    email: "",
    telefono: "",
    password: "",
    confirmPassword: "",
  })
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }))
  }

  const submit = (e: React.FormEvent) => {
    e.preventDefault()
    setError(null)

    if (!form.nombre || !form.apellido || !form.email || !form.password) {
      setError("Por favor completa los campos obligatorios.")
      return
    }
    if (form.password !== form.confirmPassword) {
      setError("Las contraseñas no coinciden.")
      return
    }

    setLoading(true)
    setTimeout(() => {
      const users: User[] = JSON.parse(localStorage.getItem("users") || "[]")
      if (users.some((u) => u.email === form.email)) {
        setError("El correo ya está registrado.")
        setLoading(false)
        return
      }
      const newUser: User = {
        id: crypto.randomUUID(),
        nombre: form.nombre,
        apellido: form.apellido,
        email: form.email,
        telefono: form.telefono,
        password: form.password,
      }
      localStorage.setItem("users", JSON.stringify([...users, newUser]))
      setLoading(false)
      onSuccess?.()
    }, 400)
  }

  return (
    <form className="space-y-4" onSubmit={submit}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="nombre">Nombre</Label>
          <Input id="nombre" name="nombre" value={form.nombre} onChange={onChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="apellido">Apellido</Label>
          <Input id="apellido" name="apellido" value={form.apellido} onChange={onChange} required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Correo electrónico</Label>
        <Input id="email" name="email" type="email" value={form.email} onChange={onChange} required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="telefono">Teléfono</Label>
        <Input id="telefono" name="telefono" value={form.telefono} onChange={onChange} />
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="password">Contraseña</Label>
          <Input id="password" name="password" type="password" value={form.password} onChange={onChange} required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="confirmPassword">Confirmar contraseña</Label>
          <Input
            id="confirmPassword"
            name="confirmPassword"
            type="password"
            value={form.confirmPassword}
            onChange={onChange}
            required
          />
        </div>
      </div>
      {error ? <p className="text-sm text-red-600">{error}</p> : null}
      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? "Creando cuenta..." : "Registrarse"}
      </Button>
    </form>
  )
}
