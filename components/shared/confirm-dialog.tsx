"use client"

import { Modal } from "antd"

export function confirmDialog({
  title = "Confirmar",
  content = "¿Deseas continuar?",
  okText = "Aceptar",
  cancelText = "Cancelar",
  onOk,
}: {
  title?: string
  content?: string | React.ReactNode
  okText?: string
  cancelText?: string
  onOk?: () => void
}) {
  Modal.confirm({
    title,
    content,
    okText,
    cancelText,
    onOk,
  })
}
