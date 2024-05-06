
import { ChangeEvent, useState } from "react";
import Input from "./ui-components/input";
import loginInputInfo from "../dataInfo/login";




export type LoginFormInputNames ={
  username:string;
  password:string;
  email:string;
}

const LoginFormInputs= ()=> {
  const [userInfo,setUserInfo]=useState<LoginFormInputNames>({
    username:'',
    password:'',
    email:'',
  })
  const infoHandlerChange= (e:ChangeEvent<HTMLInputElement>)=> {
    setUserInfo({
      ...userInfo,
      [e.target.name]:e.target.value
    })
  }
  return (
    <>
    <h1>Sign In to get access</h1>
    <form>
      {
        loginInputInfo.map( (input) =>(
          <div>
            <label htmlFor={input.name}>{input.label}</label>
            <Input type={input.type} name={input.name} value={userInfo[input.name as keyof LoginFormInputNames] } onChange={infoHandlerChange} />
          </div>
        ) )
      }
      <button>Login</button>
    </form>
    </>
    
  )
}

export default LoginFormInputs;
