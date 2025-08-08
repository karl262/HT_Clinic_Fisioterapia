"use client"

import { Pie, PieChart, ResponsiveContainer, Tooltip, Cell } from "recharts"

const data = [
  { tipo: "Evaluación", valor: 35 },
  { tipo: "Rehabilitación", valor: 45 },
  { tipo: "Masoterapia", valor: 12 },
  { tipo: "Electroterapia", valor: 8 },
]

const colors = ["hsl(160, 84%, 39%)", "hsl(162, 47%, 50%)", "hsl(158, 64%, 52%)", "hsl(152, 69%, 60%)"]

export default function ConsultationsPie() {
  return (
    <div className="w-full h-[260px]">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip />
          <Pie dataKey="valor" data={data} nameKey="tipo" innerRadius={50} outerRadius={80} paddingAngle={2}>
            {data.map((entry, idx) => (
              <Cell key={entry.tipo} fill={colors[idx % colors.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
