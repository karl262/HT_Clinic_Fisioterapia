"use client"

import "antd/dist/reset.css"
import { ConfigProvider, theme as antdTheme } from "antd"
import esES from "antd/locale/es_ES"
import React from "react"

export function AntdProvider({ children }: { children: React.ReactNode }) {
  return (
    <ConfigProvider
      locale={esES}
      theme={{
        algorithm: antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: "#10b981", // verde/teal acorde a clínica
          borderRadius: 8,
          fontSize: 14,
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
