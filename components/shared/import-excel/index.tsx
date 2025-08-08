"use client"

import React from "react"
import { Upload, message } from "antd"
import type { UploadProps } from "antd"
import { InboxOutlined } from "@ant-design/icons"
import * as XLSX from "xlsx"

export function ImportExcel({
  onData,
  ...props
}: {
  onData: (rows: any[]) => void
} & UploadProps) {
  const { Dragger } = Upload
  return (
    <Dragger
      accept=".xlsx,.xls"
      multiple={false}
      beforeUpload={() => false}
      onChange={async (info) => {
        const file = info.file.originFileObj
        if (!file) return
        try {
          const data = await file.arrayBuffer()
          const wb = XLSX.read(data)
          const ws = wb.Sheets[wb.SheetNames[0]]
          const json = XLSX.utils.sheet_to_json(ws)
          onData(json)
          message.success("Archivo importado")
        } catch (e) {
          message.error("No se pudo leer el archivo")
        }
      }}
      {...props}
    >
      <p className="ant-upload-drag-icon">
        <InboxOutlined />
      </p>
      <p className="ant-upload-text">Haz click o arrastra un Excel</p>
      <p className="ant-upload-hint">Se procesará la primera hoja del archivo.</p>
    </Dragger>
  )
}
