"use client"
import React, { useContext } from 'react'
import Nav from '../../Components/Nav'
import { AppContext } from '@/Context/AppContext'

const Forget = () => {

  const {bgColor} = useContext(AppContext)

  return (
    
    <div className={bgColor === "black" ? "bg-black text-white" : "bg-white text-black"}>
        <Nav/>
      <div className='w-[100%] h-[100vh] flex flex-col items-center text-center  py-[20px] '>
        <div className='flex flex-col gap-[40px]'>
            <h1 className='font-bold md:text-4xl text-2xl'>TASK <span className='text-[#bf616a]'>LIST</span></h1>
            <h1 className='text-3xl font-semibold'>Forget your password ?</h1>
            <div>
                <p className='text-start text-xl'>Email Address</p>
                <input className='md:w-[30vw] w-[90vw] py-[8px] bg-[#e5f4fb] px-[10px] rounded-lg'  type="text" name='email' placeholder='kissme@gmail.com' />
            </div>
           
            <div>
                <button className='bg-[#bf616a] md:w-[18vw] w-[90vw] py-[8px] rounded-lg'>Send</button>
            </div>
            
        </div>
      </div>
    </div>
    
  )

  
}

export default Forget
