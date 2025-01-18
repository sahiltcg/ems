import React from 'react'
import Header from '../other/Header'
import CreateTask from '../other/CreateTask'
import Alltask from '../other/AllTask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-7'>
        <Header />
        <CreateTask />
        <Alltask />
    </div>
  )
}

export default AdminDashboard