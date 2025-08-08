"use client"

import { Menu } from "antd"
import type { MenuProps } from "antd"

export type MenuItem = Required<MenuProps>["items"]

export function MenuList({
  items,
  mode = "inline",
  selectedKeys,
  onClick,
  className,
}: {
  items: MenuItem
  mode?: MenuProps["mode"]
  selectedKeys?: string[]
  onClick?: MenuProps["onClick"]
  className?: string
}) {
  return (
    <Menu
      mode={mode}
      items={items}
      selectedKeys={selectedKeys}
      onClick={onClick}
      className={className}
    />
  )
}
