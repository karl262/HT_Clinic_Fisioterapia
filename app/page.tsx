import { Link } from "react-router-dom"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Stethoscope } from 'lucide-react'
import Logo from "@/components/atoms/logo"

export default function HomePage() {
  return (
    <main className="min-h-[100svh] flex items-center">
      <section className="w-full">
        <div className="container grid items-center gap-10 px-4 py-16 md:grid-cols-2 md:py-24 lg:gap-16">
          <div className="order-2 md:order-1 space-y-6">
            <div className="inline-flex items-center rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground">
              <Stethoscope className="mr-2 h-3.5 w-3.5" />
              Plataforma para clínicas de fisioterapia
            </div>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              Cuidado profesional, recuperación integral
            </h1>
            <p className="text-muted-foreground text-lg">
              Gestione pacientes, citas y consultas con un panel moderno, seguro y sencillo. Diseñado para clínicas de fisioterapia orientadas a resultados.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="w-full sm:w-auto">
                <Link to="/login">Iniciar sesión</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="w-full sm:w-auto">
                <Link to="/register">Crear cuenta</Link>
              </Button>
            </div>
            <div className="pt-2">
              <Logo />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <img
                  src="/placeholder-r496w.png"
                  alt="Clínica de fisioterapia moderna con equipo profesional"
                  width={1200}
                  height={800}
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </main>
  )
}
