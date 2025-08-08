"use client"

import { Breadcrumb } from "antd"
import type { BreadcrumbProps } from "antd"

export type CrumbItem = Required<BreadcrumbProps>["items"]

export function Breadcrumbs({
  items = [],
  className,
}: { items?: CrumbItem; className?: string }) {
  return <Breadcrumb items={items} className={className} />
}
