import React from "react"
import { Navigate, Route, Routes } from "react-router-dom"
import HomePage from "@/app/page"
import LoginPage from "@/app/login/page"
import RegisterPage from "@/app/register/page"
import AdminDashboardPage from "@/app/admin/page"
import AdminLayout from "@/app/admin/layout"
import RequireAuth from "@/components/guards/require-auth"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/admin"
        element={
          <RequireAuth>
            <AdminLayout>
              <AdminDashboardPage />
            </AdminLayout>
          </RequireAuth>
        }
      />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}


