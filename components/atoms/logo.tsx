import { Stethoscope } from 'lucide-react'
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

export default function Logo({ className, compactClassName }: { className?: string; compactClassName?: string }) {
  return (
    <Link to="/" className={cn("flex items-center gap-2 px-2", className)}>
      <Stethoscope className="h-5 w-5" />
      <span className={cn("text-sm font-semibold tracking-tight", compactClassName)}>FisioCare</span>
    </Link>
  )
}
