import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { TypeIcon as type, LucideIcon } from 'lucide-react'

export default function MetricCard({
  title = "Título",
  value = "0",
  change = "",
  icon: Icon,
}: {
  title?: string
  value?: string
  change?: string
  icon?: LucideIcon
}) {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        {Icon ? <Icon className="h-4 w-4 text-muted-foreground" /> : null}
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-semibold">{value}</div>
        <p className="text-xs text-muted-foreground">{change}</p>
      </CardContent>
    </Card>
  )
}
