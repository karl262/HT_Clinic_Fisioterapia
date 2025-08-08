"use client"

import { useEffect, useState } from "react"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AdminSidebar from "@/components/organisms/admin-sidebar"
import AdminHeader from "@/components/organisms/admin-header"
import { AntdProvider } from "@/components/providers/antd-provider"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [defaultOpen, setDefaultOpen] = useState<boolean>(false)

  useEffect(() => {
    try {
      const cookie = document.cookie
        .split(";")
        .map((c) => c.trim())
        .find((c) => c.startsWith("sidebar:state="))
      if (cookie) {
        setDefaultOpen(cookie.split("=")[1] === "true")
      }
    } catch {}
  }, [])

  return (
    <AntdProvider>
      <SidebarProvider defaultOpen={defaultOpen}>
        <AdminSidebar />
        <SidebarInset>
          <AdminHeader />
          {children}
        </SidebarInset>
      </SidebarProvider>
    </AntdProvider>
  )
}
