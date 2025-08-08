"use client"

import { Modal, Form, type FormProps } from "antd"
import React from "react"

type FormModalProps<T> = {
  open: boolean
  title: string
  okText?: string
  cancelText?: string
  onOk: (values: T) => void
  onCancel: () => void
  initialValues?: Partial<T>
  children: React.ReactNode
} & Omit<FormProps<T>, "onFinish" | "initialValues" | "children">

export default function FormModal<T extends Record<string, any>>({
  open,
  title,
  okText = "Guardar",
  cancelText = "Cancelar",
  onOk,
  onCancel,
  initialValues,
  children,
  ...formProps
}: FormModalProps<T>) {
  const [form] = Form.useForm<T>()

  React.useEffect(() => {
    if (open) {
      form.resetFields()
      if (initialValues) form.setFieldsValue(initialValues as T)
    }
  }, [open, initialValues, form])

  return (
    <Modal
      open={open}
      title={title}
      okText={okText}
      cancelText={cancelText}
      onOk={() => form.submit()}
      onCancel={onCancel}
      destroyOnClose
    >
      <Form<T>
        form={form}
        layout="vertical"
        onFinish={onOk}
        initialValues={initialValues}
        {...formProps}
      >
        {children}
      </Form>
    </Modal>
  )
}
