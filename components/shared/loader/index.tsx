"use client"

import { Spin } from "antd"

export function Loader({ tip = "Cargando..." }: { tip?: string }) {
  return (
    <div className="grid min-h-40 place-items-center">
      <Spin tip={tip} />
    </div>
  )
}
