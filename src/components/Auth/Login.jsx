import React from 'react'
import { useState } from 'react'

const Login = ({handleLogin}) => {

    // console.log(handleLogin)

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const submithandler = (e) => {
        e.preventDefault()
        handleLogin(email,password)
        setEmail("")
        setPassword("")
    }


  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 border-emerald-600 rounded-xl p-20">
            <form 
            onSubmit={(e)=>{
                    submithandler(e)
            }} className='flex flex-col items-center justify-center gap-4'>
                <input value={email}
                onChange={(e)=>{
                    setEmail(e.target.value)
                    
                }} required className='text-white font-semibold outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
                <input value={password}
                onChange={(e)=>{
                    setPassword(e.target.value)
                }}
                required className='text-white font-semibold outline-none bg-transparent border-2 border-emerald-600 px-5 py-3 text-xl rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password'/>
                <button className='text-white font-semibold outline-none bg-emerald-600 hover:bg-emerald-700 px-32 py-3 text-lg rounded-full mt-6 placeholder:text-orange-400'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login