"use client"

import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts"

const data = [
  { mes: "Ene", citas: 120 },
  { mes: "Feb", citas: 140 },
  { mes: "Mar", citas: 160 },
  { mes: "Abr", citas: 155 },
  { mes: "May", citas: 170 },
  { mes: "Jun", citas: 180 },
  { mes: "Jul", citas: 175 },
  { mes: "Ago", citas: 190 },
  { mes: "Sep", citas: 200 },
  { mes: "Oct", citas: 210 },
  { mes: "Nov", citas: 205 },
  { mes: "Dic", citas: 220 },
]

export default function AppointmentsBar() {
  return (
    <div className="w-full h-[320px]">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={data}>
          <CartesianGrid vertical={false} strokeDasharray="3 3" />
          <XAxis dataKey="mes" axisLine={false} tickLine={false} />
          <YAxis axisLine={false} tickLine={false} />
          <Tooltip />
          <Bar dataKey="citas" fill="hsl(162, 47%, 50%)" radius={[6, 6, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  )
}
