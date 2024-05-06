import { InputHTMLAttributes } from "react"

interface buttonProps extends InputHTMLAttributes<HTMLInputElement>{}

const Input=({ ...rest}: buttonProps) =>{
  return (
    <Input {...rest}/> 
    
  )
}

export default Input


