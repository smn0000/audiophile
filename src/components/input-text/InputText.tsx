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
  regExp.set(
    "zipcode",
    /^(?:(?:(?:\+|00)?48)|(?:\(\+?48\)))?(?:1[2-8]|2[2-69]|3[2-49]|4[1-8]|5[0-9]|6[0-35-9]|[7-8][1-9]|9[145])\d{7}&/
  )
  regExp.set("pin", /^[0-9]{4}$/)
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
