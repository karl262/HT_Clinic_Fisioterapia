"use client"

import { useNavigate } from "react-router-dom"
import LoginForm from "@/components/molecules/login-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function LoginPage() {
  const navigate = useNavigate()

  return (
    <main className="min-h-[100svh] grid place-items-center px-4 py-12">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle>Iniciar sesión</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <LoginForm
            onSuccess={() => {
              navigate("/admin")
            }}
          />
          <p className="text-sm text-muted-foreground">
            ¿No tienes cuenta?{" "}
            <Link to="/register" className="underline">
              Regístrate
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
