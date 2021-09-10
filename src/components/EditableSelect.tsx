import React, { FC, useState } from 'react'
import { Text } from '@react-pdf/renderer'
import CreatableSelect  from 'react-select/creatable'
import compose from '../styles/compose'

export interface SelectOption {
  value: string
  label: string
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
}

const EditableSelect: FC<Props> = ({
  className,
  options,
  placeholder,
  value,
  pdfMode,
  toShow,
  handleChange
}) => {
  const [isEditing, setIsEditing] = useState<boolean>(false)
  const [showString,setToShow]= useState<string>(toShow)

  return (
    <>
      {pdfMode ? (
        <Text style={compose('span ' + (className ? className : ''))}>{value?value.label:""}</Text>
      ) : (
        <>
          {isEditing ? (
            <CreatableSelect
              isClearable={true}
              className={'select ' + (className ? className : '')}
              value={value}
              onChange={handleChange ? (opt)=>{
                handleChange(opt?opt:{})
              } : undefined}
              //onChange={(selected?: MyOption | MyOption[] | null)=>setMyVal(selected)}
              onBlur={() => setIsEditing(false)}
              autoFocus={true}
              onInputChange={(val,actionMeta)=>console.log(val)}
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
          )}
        </>
      )}
    </>
  )
}

export default EditableSelect
