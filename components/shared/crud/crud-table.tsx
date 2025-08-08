"use client"

import React from "react"
import { Table, Space } from "antd"
import type { ColumnsType } from "antd/es/table"

export type CrudTableProps<T extends { id: string | number }> = {
  data: T[]
  columns: ColumnsType<T>
  onEdit?: (row: T) => void
  onDelete?: (row: T) => void
  loading?: boolean
}

export function CrudTable<T extends { id: string | number }>({
  data,
  columns,
  onEdit,
  onDelete,
  loading,
}: CrudTableProps<T>) {
  const withActions: ColumnsType<T> =
    onEdit || onDelete
      ? [
          ...columns,
          {
            title: "Acciones",
            key: "actions",
            render: (_, record) => (
              <Space size="small">
                {onEdit && (
                  <a onClick={() => onEdit(record)} aria-label="Editar">
                    Editar
                  </a>
                )}
                {onDelete && (
                  <a onClick={() => onDelete(record)} aria-label="Eliminar">
                    Eliminar
                  </a>
                )}
              </Space>
            ),
          },
        ]
      : columns
  return (
    <Table<T>
      rowKey={(r) => String(r.id)}
      dataSource={data}
      columns={withActions}
      loading={loading}
      pagination={{ pageSize: 10, showSizeChanger: true }}
      scroll={{ x: "max-content" }}
    />
  )
}
