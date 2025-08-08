"use client"

import { Table, type TableProps } from "antd"

export type DataTableProps<T extends object> = TableProps<T>

export function DataTable<T extends object>({
  pagination = { pageSize: 10, showSizeChanger: true },
  scroll = { x: "max-content" },
  ...props
}: DataTableProps<T>) {
  return <Table<T> pagination={pagination} scroll={scroll} {...props} />
}
