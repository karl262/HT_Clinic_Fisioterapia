"use client"

import { SidebarTrigger } from "@/components/ui/sidebar"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { useNavigate } from "react-router-dom"

export default function AdminHeader() {
  const navigate = useNavigate()

  return (
    <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="flex items-center gap-3 px-4 py-3">
        <SidebarTrigger />
        <div className="flex-1">
          <div className="max-w-md">
            <Input placeholder="Buscar pacientes, citas..." aria-label="Buscar" />
          </div>
        </div>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="gap-2">
              <Avatar className="h-7 w-7">
                <AvatarFallback>AD</AvatarFallback>
              </Avatar>
              <span className="hidden sm:inline">Administrador</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Mi cuenta</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={() => navigate("/admin/configuracion")}>Configuración</DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {
                if (typeof window !== "undefined") {
                  localStorage.removeItem("session")
                }
                navigate("/login")
              }}
            >
              Cerrar sesión
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
