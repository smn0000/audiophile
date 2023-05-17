import { MouseEventHandler } from "react"
import "./styles.scss"
const Button = ({
  onClick,
  text,
  type = "deafult",
}: {
  onClick: MouseEventHandler
  text: string
  type?: "deafult" | "alternate" | "transparent" | "black"
}) => {
  return (
    <button
      className={`button type-${type}`}
      onClick={onClick}>
      {text}
      {type === "transparent" && (
        <svg
          width='8'
          height='12'
          xmlns='http://www.w3.org/2000/svg'>
          <path
            d='M1.322 1l5 5-5 5'
            stroke='#D87D4A'
            strokeWidth='2'
            fill='none'
            fillRule='evenodd'
          />
        </svg>
      )}
    </button>
  )
}

export default Button
