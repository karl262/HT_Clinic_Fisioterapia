"use client"

import { DatePicker, type RangePickerProps } from "antd"

export default function DateRangePicker(props: RangePickerProps) {
  const { RangePicker } = DatePicker
  return <RangePicker style={{ width: "100%" }} {...props} />
}
