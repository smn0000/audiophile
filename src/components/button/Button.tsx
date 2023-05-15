import { MouseEventHandler } from "react"
import "./styles.scss"
const Button = ({
  onClick,
  text,
}: {
  onClick: MouseEventHandler
  text: string
}) => {
  return (
    <button
      className='button'
      onClick={onClick}>
      {text}
    </button>
  )
}

export default Button
