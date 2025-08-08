"use client"

import { Button, type ButtonProps } from "antd"

export default function PrimaryButton({
  children = "Guardar",
  ...props
}: ButtonProps) {
  return (
    <Button type="primary" {...props}>
      {children}
    </Button>
  )
}
