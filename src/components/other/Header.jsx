/* eslint-disable no-unused-vars */
import React from 'react'

const Header = () => {
  return (
    <div className='flex item-end justify-between'>
        <h1 className='text-2xl font-medium'>Hello <br /> <span className='text-3xl font-semibold'>Sahil 👋</span></h1>
        <button className='text-lg text-white font-medium bg-red-600 hover:bg-red-700 px-5 rounded-xl'>Log Out</button>
    </div>
  )
}

export default Header