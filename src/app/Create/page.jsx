// "use client"
import React from 'react'
import Nav from '../Components/Nav'

const Create = () => {    
  return (
        <div>
            <Nav/>
            <div className='w-[100%] h-[100vh] flex flex-col items-center text-center  py-[20px]'>
            <div className='flex flex-col   bg-[#ffffff]  gap-[40px]'>
            <h1 className='text-3xl font-semibold'>Create New Task</h1>
            <div>
                <p className='text-start text-xl'>Task Title</p>
                <input className='md:w-[30vw] w-[90vw] py-[8px] bg-[#e5f4fb] px-[10px] rounded-lg' type="text" name='title' placeholder='Title of the task' />
            </div>
            <div>
                <p className='text-start text-xl'>Details</p>
                 <textarea className='md:w-[30vw] w-[90vw] py-[8px] bg-[#e5f4fb] px-[10px] rounded-lg' name="Task details" placeholder='Details of the new task' id=""></textarea>
            </div>
                <p className=''>Time & Date</p>
            <div className=''>
                <div className='flex gap-[30px] items-center justify-center'>
                    <div className='flex items-center justify-center'>
                     <input type="time" name="" id="" />
                    </div>
                    <div className='flex items-center justify-center'>
                        <input type="date" name=""/>
                    </div>
                </div>
                
                <div className='flex flex-col items-center gap-[20px]'>
                    <h1 className='text-white'>Add New</h1>
                    <button className='bg-[#bf616a] md:w-[18vw] w-[90vw] py-[8px] rounded-lg'>Create</button>
                </div>
            </div>
        </div>
    </div>
        </div>
  )
}

export default Create
