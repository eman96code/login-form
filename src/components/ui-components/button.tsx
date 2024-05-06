import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const Button = ({children,...rest}: ButtonProps)=> {
  return (
    <Button {...rest}>{children}</Button>
  )
}

export default Button
