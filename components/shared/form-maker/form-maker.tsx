"use client"

import React from "react"
import { Form, FormItem, TextInput, TextArea, SelectInput, DateInput, NumberInput } from "../form"
import PrimaryButton from "../button/primary-button"

type FieldBase = {
  name: string
  label: string
  required?: boolean
  placeholder?: string
}
type TextField = FieldBase & { type: "text" | "textarea" }
type NumberField = FieldBase & { type: "number" }
type DateField = FieldBase & { type: "date" }
type SelectField = FieldBase & { type: "select"; options: { label: string; value: string | number }[] }
export type FormField = TextField | NumberField | DateField | SelectField

export function FormMaker<T extends Record<string, any>>({
  fields,
  initialValues,
  submitText = "Guardar",
  onSubmit,
}: {
  fields: FormField[]
  initialValues?: Partial<T>
  submitText?: string
  onSubmit: (values: T) => void
}) {
  const [form] = Form.useForm<T>()
  return (
    <Form<T>
      form={form}
      layout="vertical"
      initialValues={initialValues}
      onFinish={(v) => onSubmit(v)}
    >
      {fields.map((f) => {
        const rules = f.required ? [{ required: true }] : undefined
        switch (f.type) {
          case "textarea":
            return (
              <FormItem key={f.name} name={f.name} label={f.label} rules={rules}>
                <TextArea placeholder={f.placeholder} />
              </FormItem>
            )
          case "number":
            return (
              <FormItem key={f.name} name={f.name} label={f.label} rules={rules}>
                <NumberInput style={{ width: "100%" }} placeholder={f.placeholder} />
              </FormItem>
            )
          case "date":
            return (
              <FormItem key={f.name} name={f.name} label={f.label} rules={rules}>
                <DateInput style={{ width: "100%" }} placeholder={f.placeholder} />
              </FormItem>
            )
          case "select":
            return (
              <FormItem key={f.name} name={f.name} label={f.label} rules={rules}>
                <SelectInput options={f.options} placeholder={f.placeholder} />
              </FormItem>
            )
          default:
            return (
              <FormItem key={f.name} name={f.name} label={f.label} rules={rules}>
                <TextInput placeholder={f.placeholder} />
              </FormItem>
            )
        }
      })}
      <PrimaryButton htmlType="submit">{submitText}</PrimaryButton>
    </Form>
  )
}
