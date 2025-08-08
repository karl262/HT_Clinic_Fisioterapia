"use client"

import "antd/dist/reset.css"
import React from "react"
import { ConfigProvider, theme as antdTheme } from "antd"
import esES from "antd/locale/es_ES"

export function AntdProvider({
  children,
  locale = esES,
  primaryColor = "#10b981",
}: {
  children: React.ReactNode
  locale?: any
  primaryColor?: string
}) {
  return (
    <ConfigProvider
      locale={locale}
      theme={{
        algorithm: antdTheme.defaultAlgorithm,
        token: {
          colorPrimary: primaryColor,
          borderRadius: 8,
          fontSize: 14,
        },
      }}
    >
      {children}
    </ConfigProvider>
  )
}
