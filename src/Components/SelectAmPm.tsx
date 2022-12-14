import React, { useState } from 'react'
import { defaultOptions } from '../Constants/DefaultData.enum'
import timepickerStyles from '../styles.module.css'

interface Props {
  id: string
  data: any
  refChild: any
  name: string
  className: any
  style: any
  onKeyDown: (e: any) => void
  onSelect: (e?: any) => void
}

const SelectAmPm = (props: Props) => {
  const data = props.data.length ? props.data : defaultOptions
  const [selectedOption, setSelectedOption] = useState('')

  const onSelectingValue = (e: any) => {
    setSelectedOption(e.target.value)
    props.onSelect(e.target.value)
  }

  const onBlurSelectValue = (e: any) => {
    e.persist()
  }

  return (
    <select
      id={props.id}
      ref={props.refChild}
      onChange={onSelectingValue}
      onKeyDown={props.onKeyDown}
      className={`${props.className} ${timepickerStyles.select__am}`}
      style={{
        ...props.style
      }}
      name={props.name}
      value={selectedOption}
      onBlur={onBlurSelectValue}
    >
      {data.map((item: any) => (
        <option key={Math.random().toString()} value={item.value}>
          {item.name}
        </option>
      ))}
    </select>
  )
}

export default SelectAmPm
