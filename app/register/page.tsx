"use client"

import { useNavigate } from "react-router-dom"
import RegisterForm from "@/components/molecules/register-form"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Link } from "react-router-dom"

export default function RegisterPage() {
  const navigate = useNavigate()

  return (
    <main className="min-h-[100svh] grid place-items-center px-4 py-12">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Crear cuenta</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <RegisterForm
            onSuccess={() => {
              navigate("/login")
            }}
          />
          <p className="text-sm text-muted-foreground">
            ¿Ya tienes una cuenta?{" "}
            <Link to="/login" className="underline">
              Inicia sesión
            </Link>
          </p>
        </CardContent>
      </Card>
    </main>
  )
}
