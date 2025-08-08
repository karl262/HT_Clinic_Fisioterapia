"use client"

import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts"

const data = [
  { mes: "Ene", pacientes: 80 },
  { mes: "Feb", pacientes: 95 },
  { mes: "Mar", pacientes: 110 },
  { mes: "Abr", pacientes: 130 },
  { mes: "May", pacientes: 150 },
  { mes: "Jun", pacientes: 170 },
  { mes: "Jul", pacientes: 180 },
  { mes: "Ago", pacientes: 200 },
  { mes: "Sep", pacientes: 220 },
  { mes: "Oct", pacientes: 240 },
  { mes: "Nov", pacientes: 260 },
  { mes: "Dic", pacientes: 275 },
]

export default function PatientsLine() {
  return (
    <div className="w-full h-[280px]">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="mes" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Line type="monotone" dataKey="pacientes" stroke="hsl(160, 84%, 39%)" strokeWidth={2} dot={false} />
        </LineChart>
      </ResponsiveContainer>
    </div>
  )
}
