"use client"

import React from "react"
import { Modal, Form, Input } from "antd"
import PrimaryButton from "../button/primary-button"

export function BugReportModal({
  open,
  onClose,
  onSubmit,
}: {
  open: boolean
  onClose: () => void
  onSubmit: (payload: { asunto: string; detalle: string }) => void
}) {
  const [form] = Form.useForm<{ asunto: string; detalle: string }>()
  return (
    <Modal
      open={open}
      title="Reportar un problema"
      onCancel={onClose}
      onOk={() => form.submit()}
      okText="Enviar"
      destroyOnClose
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={(v) => {
          onSubmit(v)
          onClose()
        }}
      >
        <Form.Item name="asunto" label="Asunto" rules={[{ required: true }]}>
          <Input placeholder="¿Qué ocurrió?" />
        </Form.Item>
        <Form.Item
          name="detalle"
          label="Detalle"
          rules={[{ required: true }]}
        >
          <Input.TextArea rows={4} placeholder="Describe los pasos..." />
        </Form.Item>
        <PrimaryButton htmlType="submit" className="hidden">
          Enviar
        </PrimaryButton>
      </Form>
    </Modal>
  )
}
