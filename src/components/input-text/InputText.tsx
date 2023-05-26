import "./styles.scss"
import { useState } from "react"

type TFormat = "email" | "phone" | "zipcode" | "pin"

const InputText = ({
  placeholder,
  name,
  label,
  format,
  width = "half",
}: {
  placeholder: string
  name: string
  label: string
  format?: TFormat
  width?: "half" | "full"
}) => {
  const regExp = new Map()
  regExp.set(
    "email",
    /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
  )
  regExp.set("phone", /^[+]?[(]?[0-9]{3}[)]?[-s.]?[0-9]{3}[-s.]?[0-9]{4,6}$/)
  regExp.set("zipcode", /^[0-9]{5}(?:-[0-9]{4})?$/)
  regExp.set("pin", /^d{4}$|^d{6}$"/)
  const [isValidInput, setIsValidInput] = useState(true)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!format) return
    const input = e.target.value
    if (regExp.get(format).test(input)) {
      setIsValidInput(true)
    } else setIsValidInput(false)
  }
  return (
    <div className={`input__wrapper ${width} ${isValidInput ? "" : "wrong"}`}>
      <div className='input__label__wrapper'>
        <label
          className='label'
          htmlFor={name}>
          {label}
        </label>
        <p className='label__wrong-format'>Wrong format</p>
      </div>
      <input
        onChange={(e) => handleChange(e)}
        className='input'
        id={name}
        type='text'
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputText
