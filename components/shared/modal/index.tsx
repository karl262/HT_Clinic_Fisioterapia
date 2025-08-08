"use client"

import { Modal as AntModal } from "antd"

export const Modal = AntModal
export function confirm({
  title,
  content,
  okText = "Aceptar",
  cancelText = "Cancelar",
  onOk,
}: {
  title: string
  content?: string | React.ReactNode
  okText?: string
  cancelText?: string
  onOk?: () => void
}) {
  AntModal.confirm({ title, content, okText, cancelText, onOk })
}
