"use client"

import { Button, type ButtonProps } from "antd"

export default function PrimaryButton({
  children = "Guardar",
  block = false,
  ...props
}: ButtonProps) {
  return (
    <Button type="primary" block={block} {...props}>
      {children}
    </Button>
  )
}
