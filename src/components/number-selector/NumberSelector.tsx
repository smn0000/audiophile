import "./styles.scss"
import { useRef } from "react"

const NumberSelector = ({
  onIncrement,
  onSet,
  onDecrement,
  currentValue,
}: {
  onIncrement: () => void
  onSet: (value: number) => void
  onDecrement: () => void
  currentValue: number
}) => {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <div className='number-selector'>
      <button
        disabled={currentValue === 0 ? true : false}
        onClick={onDecrement}>
        -
      </button>
      <input
        min={1}
        ref={inputRef}
        key={currentValue}
        defaultValue={currentValue}
        onChange={(e) => onSet(Number(e.target.value))}
        type='number'
        pattern='[0-9]+'
      />
      <button onClick={onIncrement}>+</button>
    </div>
  )
}

export default NumberSelector
