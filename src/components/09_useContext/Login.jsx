import React, { useState } from 'react'
import AuthContext from './AuthContext'
import Profile from './Profile'


const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submitHandler = (e) =>{
        e.preventDefault();
        console.log(email + ' ' + password)
    }
  return (
    <AuthContext.Provider value={{email,password}}>
        <input type="email" name='email' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
        <input type="password" name='password' placeholder='Enter Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
        <button onClick={submitHandler}>Submit</button>
        <Profile/> 
         
    </AuthContext.Provider>
  )
}

export default Login