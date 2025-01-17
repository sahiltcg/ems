import React from 'react'

const Login = () => {
  return (
    <div className='flex h-screen w-screen items-center justify-center'>
        <div className="border-2 border-emerald-600 rounded-xl p-20">
            <form className='flex flex-col items-center justify-center gap-8 border-2'>
                <input required className='text-white font-semibold outline-none bg-transparent border-2 border-emerald-600 px-5 py-4 text-xl rounded-full placeholder:text-gray-400' type="email" placeholder='Enter your email'/>
                <input required className='text-white font-semibold outline-none bg-transparent border-2 border-emerald-600 px-5 py-4 text-xl rounded-full placeholder:text-gray-400' type="password" placeholder='Enter password'/>
                <button className='text-white font-semibold outline-none bg-transparent bg-emerald-600 px-10 py-5 text-xl rounded-full placeholder:text-orange-400'>Log in</button>
            </form>
        </div>
    </div>
  )
}

export default Login