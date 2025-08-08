import React from "react"
import ReactDOM from "react-dom/client"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@/components/theme-provider"
import "@/app/globals.css"
import App from "./App"

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <App />
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
)


