import "./styles.scss"

type TFormat = "email" | "phone" | "zipcode" | "pin" | "e-number"

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
  return (
    <div className={`input__wrapper ${width}`}>
      <div className='input__label__wrapper'>
        <label
          className='label'
          htmlFor={name}>
          {label}
        </label>
        <p className='label__wrong-format'>Wrong format</p>
      </div>
      <input
        className='input'
        id={name}
        type='text'
        placeholder={placeholder}
      />
    </div>
  )
}

export default InputText
