import React, { FC, useState,useEffect } from 'react'
import { Text } from '@react-pdf/renderer'
import Select from 'react-select'
import compose from '../styles/compose'
import TextareaAutosize from 'react-textarea-autosize'

export interface SelectOption {
  value: string
  label: string
  price: string
}
type MyOption = {label: string, value: number}
interface Props {
  className?: string
  options?: SelectOption[]
  placeholder?: string
  value?: any
  onChange?: (value: string) => void
  handleChange?:(value: object)=>void
  pdfMode?: boolean
  toShow:string
  rows?: number
}

const EditableDesc: FC<Props> = ({
  className,
  options,
  placeholder,
  value,
  pdfMode,
  toShow,
  rows,
  onChange
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [showString,setToShow]= useState<string>(toShow)

  useEffect(()=>{
    console.log(pdfMode);
  },[pdfMode])

  return (
    <>
      {pdfMode ? (
        <Text style={compose('span ' + (className ? className : ''))}>{value?value.label:""}</Text>
      ) : (
        <>
          {isEditing ? (
            <Select
              className={'select ' + (className ? className : '')}
              value={value}
              onChange={onChange ? (opt)=>{
                onChange(opt?opt:{})
              } : undefined}
              //onChange={(selected?: MyOption | MyOption[] | null)=>setMyVal(selected)}
              onBlur={() => setIsEditing(false)}
              autoFocus={true}
              options={options}
            />
          ) : (
            <input
              readOnly={true}
              type="text"
              className={'input ' + (className ? className : '')}
              value={value?value.label:""}
              placeholder={placeholder || ''}
              onFocus={() => setIsEditing(true)}
            />
            // <TextareaAutosize
            //     minRows={rows || 1}
            //     className={'input ' + (className ? className : '')}
            //     placeholder={placeholder || ''}
            //     value={value ? value.label :}
            // />
          )}
        </>
      )}
    </>
  )
}

export default EditableDesc
