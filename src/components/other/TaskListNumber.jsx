import React from 'react'

const TaskListNumber = () => {
  return (
    <div className='flex mt-10 justify-between gap-5 screen'>
            <div className='w-[45%] rounded-xl px-9 py-6 bg-red-400'>
                <h2 className='text-3xl font-semibold'>1</h2>
                <h3 className='text-xl font-medium'>New Task</h3>
            </div>
            <div className='w-[45%] rounded-xl px-9 py-6 bg-sky-400'>
                <h2 className='text-3xl font-semibold'>3</h2>
                <h3 className='text-xl font-medium'>Completed Task</h3>
            </div>
            <div className='w-[45%] rounded-xl px-9 py-6 bg-orange-400'>
                <h2 className='text-3xl font-semibold'>0</h2>
                <h3 className='text-xl font-medium'>Accepted Task</h3>
            </div>
            <div className='w-[45%] rounded-xl px-9 py-6 bg-yellow-400'>
                <h2 className='text-3xl font-semibold text-black'>0</h2>
                <h3 className='text-xl font-medium text-black'>Failed Task</h3>
            </div>
    </div>
  )
}

export default TaskListNumber