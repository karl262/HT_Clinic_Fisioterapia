"use client"

import { Link } from "react-router-dom"
import React from "react"

export function RouterLink({
  href,
  children,
  className,
  prefetch,
}: {
  href: string
  children: React.ReactNode
  className?: string
  prefetch?: boolean
}) {
  return (
    <Link to={href} className={className}>
      {children}
    </Link>
  )
}
