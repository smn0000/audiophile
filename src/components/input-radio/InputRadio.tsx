import "./styles.scss"

const InputRadio = ({ name, label, options }: { name: string; label: string; options: string[] }) => {
  return (
    <div className='input-radio__group__wrapper'>
      <p className='input-radio__label'>{label}</p>
      <div className='input-radio__group'>
        {options.map((option, id) => (
          <label
            key={id}
            htmlFor={option}
            className='input-radio__wrapper'>
            <input
              type='radio'
              id={option}
              name={name}
              className='input-radio'
            />
            <label htmlFor={option}>{option}</label>
          </label>
        ))}
      </div>
    </div>
  )
}

export default InputRadio
