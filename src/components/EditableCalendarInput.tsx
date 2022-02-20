import React, { FC } from 'react'
import { Text } from '@react-pdf/renderer'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'
import compose from '../styles/compose'
import format from 'date-fns/format'

interface Props {
  className?: string
  value?: string
  selected?: Date
  onChange?: (date: Date | [Date, Date] | null) => void
  pdfMode?: boolean
}
const EditableCalendarInput: FC<Props> = ({ className, value, selected, onChange, pdfMode }) => {
  return (
    <>
      {pdfMode ? (
        <Text style={compose('span ' + (className ? className : ''))}>{value}</Text>
      ) : (
        <DatePicker
          className={'input ' + (className ? className : '')}
          selected={selected}
          onChange={onChange ? (date) => {
            console.log("MAIN::",date)
            onChange(date)
          } : (date) => null}
          dateFormat="dd, MMM yyyy"
        />
      )}
    </>
  )
}

export default EditableCalendarInput
