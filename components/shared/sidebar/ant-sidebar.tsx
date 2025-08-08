"use client"

import React from "react"
import { Layout, Menu } from "antd"
import type { MenuProps } from "antd"

const { Sider } = Layout

export function AntSidebar({
  collapsed,
  onCollapse,
  items,
  selectedKeys,
  onSelect,
  width = 220,
}: {
  collapsed?: boolean
  onCollapse?: (v: boolean) => void
  items: Required<MenuProps>["items"]
  selectedKeys?: string[]
  onSelect?: MenuProps["onSelect"]
  width?: number
}) {
  return (
    <Sider collapsible collapsed={collapsed} onCollapse={onCollapse} width={width}>
      <div className="h-12" />
      <Menu
        theme="light"
        mode="inline"
        items={items}
        selectedKeys={selectedKeys}
        onSelect={onSelect}
      />
    </Sider>
  )
}
