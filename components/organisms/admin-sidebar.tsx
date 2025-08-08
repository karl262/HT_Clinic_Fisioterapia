"use client"

import { Link, useLocation } from "react-router-dom"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarSeparator,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar"
import { Activity, BarChart3, CalendarDays, FileText, Home, LifeBuoy, Settings, Users } from 'lucide-react'
import Logo from "@/components/atoms/logo"

const items = [
  { title: "Inicio", href: "/admin", icon: Home },
  { title: "Pacientes", href: "/admin/pacientes", icon: Users },
  { title: "Citas", href: "/admin/citas", icon: CalendarDays },
  { title: "Consultas", href: "/admin/consultas", icon: FileText },
  { title: "Reportes", href: "/admin/reportes", icon: BarChart3 },
  { title: "Terapias", href: "/admin/terapias", icon: Activity },
  { title: "Configuración", href: "/admin/configuracion", icon: Settings },
  { title: "Soporte", href: "/admin/soporte", icon: LifeBuoy },
]

export default function AdminSidebar() {
  const pathname = useLocation().pathname
  const { state } = useSidebar()
  const isCollapsed = state === "collapsed"

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader>
        {isCollapsed ? (
          <div className="p-2">
            <SidebarTrigger aria-label="Abrir menú" />
          </div>
        ) : (
          <Logo />
        )}
      </SidebarHeader>

      <SidebarSeparator />

      <SidebarContent>
        {!isCollapsed && (
          <SidebarGroup>
            <SidebarGroupLabel>Administración</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => {
                  const active = pathname === item.href
                  const Icon = item.icon
                  return (
                    <SidebarMenuItem key={item.title}>
                      <SidebarMenuButton asChild isActive={active} tooltip={item.title}>
                        <Link to={item.href}>
                          <Icon />
                          <span>{item.title}</span>
                        </Link>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  )
                })}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      {!isCollapsed && (
        <SidebarFooter>
          <div className="px-2 text-xs text-sidebar-foreground/70">v1.0.0</div>
        </SidebarFooter>
      )}
    </Sidebar>
  )
}
