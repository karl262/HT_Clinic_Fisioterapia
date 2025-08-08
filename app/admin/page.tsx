"use client"

import RequireAuth from "@/components/guards/require-auth"
import MetricCard from "@/components/atoms/metric-card"
import { Activity, BarChart3, CalendarCheck2, Users } from 'lucide-react'
import PatientsLine from "@/components/organisms/charts/patients-line"
import AppointmentsBar from "@/components/organisms/charts/appointments-bar"
import ConsultationsPie from "@/components/organisms/charts/consultations-pie"

export default function AdminDashboardPage() {
  return (
    <RequireAuth>
      <main className="p-4 md:p-6">
        <section className="space-y-6">
          <div>
            <h1 className="text-2xl font-semibold tracking-tight">Panel de administración</h1>
            <p className="text-muted-foreground">
              Resumen general de pacientes, citas y consultas
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            <MetricCard
              title="Pacientes totales"
              value="1,248"
              change="+12% vs. mes anterior"
              icon={Users}
            />
            <MetricCard
              title="Citas hoy"
              value="32"
              change="+8% semana"
              icon={CalendarCheck2}
            />
            <MetricCard
              title="Consultas (7d)"
              value="180"
              change="+5% semana"
              icon={BarChart3}
            />
            <MetricCard
              title="Tasa de cancelación"
              value="3.2%"
              change="-0.4% mes"
              icon={Activity}
            />
          </div>

          <div className="grid gap-4 lg:grid-cols-3">
            <div className="lg:col-span-2 rounded-lg border bg-card p-4">
              <h2 className="text-lg font-medium">Crecimiento de pacientes</h2>
              <p className="text-sm text-muted-foreground">Últimos 12 meses</p>
              <div className="mt-4">
                <PatientsLine />
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4">
              <h2 className="text-lg font-medium">Distribución de consultas</h2>
              <p className="text-sm text-muted-foreground">Por tipo</p>
              <div className="mt-4">
                <ConsultationsPie />
              </div>
            </div>
            <div className="rounded-lg border bg-card p-4 lg:col-span-3">
              <h2 className="text-lg font-medium">Citas por mes</h2>
              <p className="text-sm text-muted-foreground">Comparativa anual</p>
              <div className="mt-4">
                <AppointmentsBar />
              </div>
            </div>
          </div>
        </section>
      </main>
    </RequireAuth>
  )
}
