import "./styles.scss"
import { useState } from "react"

const InputText = ({
  placeholder,
  id,
  name,
  label,
  width = "half",
  value,
  onChange,
  isWrong = false,
}: {
  placeholder: string
  id: string
  name: string
  label: string
  width?: "half" | "full"
  value: string
  onChange: (e: React.ChangeEvent<any>) => void
  isWrong?: boolean | ""
}) => {
  return (
    <div className={`input__wrapper ${width} ${isWrong ? "wrong" : ""}`}>
      <div className="input__label__wrapper">
        <label className="label" htmlFor={id}>
          {label}
        </label>
        <p className="label__wrong-format">Wrong format</p>
      </div>
      <input
        onChange={onChange}
        placeholder={placeholder}
        className="input"
        name={name}
        id={id}
        type="text"
        value={value}
      />
    </div>
  )
}

export default InputText
