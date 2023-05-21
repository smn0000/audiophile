import "./styles.scss"
import { useRef, useReducer, useEffect } from "react"

interface CountAction {
  type: "INCREMENT" | "DECREMENT" | "SET"
  payload?: number
}

interface CountState {
  count: number
}
function counterReducer(state: CountState, action: CountAction): CountState {
  const { type, payload } = action
  switch (type) {
    case "SET":
      if (!payload) return { count: state.count }
      return {
        ...state,
        count: payload,
      }

    case "INCREMENT":
      return {
        ...state,
        count: state.count + 1,
      }
    case "DECREMENT":
      if (state.count <= 0) return { ...state, count: 0 }
      return {
        ...state,
        count: state.count - 1,
      }
    default:
      return { count: state.count }
  }
}
const NumberSelector = ({ updateValue }: { updateValue: any }) => {
  const inputRef = useRef<HTMLInputElement>(null)

  const [state, dispatch] = useReducer(counterReducer, { count: 1 })
  useEffect(() => {
    updateValue(state.count)
  }, [state.count])

  return (
    <div className='number-selector'>
      <button
        disabled={state.count === 0 ? true : false}
        onClick={() => dispatch({ type: "DECREMENT" })}>
        -
      </button>
      <input
        ref={inputRef}
        key={state.count}
        defaultValue={state.count}
        onChange={() =>
          dispatch({ type: "SET", payload: Number(inputRef.current?.value) })
        }
        type='number'
        pattern='[0-9]+'
      />
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
    </div>
  )
}

export default NumberSelector
