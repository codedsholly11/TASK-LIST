import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div className='w-[100%] h-[100vh] flex flex-col items-center justify-center '> 
        <div className='flex flex-col w-[50vw] items-center justify-center gap-[30px]'>
          <h1 className='text-7xl font-bold text-center'>Organize your work and life, easily.</h1>
          <p className='text-2xl text-[#bf616a] text-center'>Simplify life for both you and your team. The world’s #1 task manager and to-do list app.</p>
          <a href="/SignUp"><button className='bg-[#bf616a] w-[15vw] font-bold text-white py-[10px] rounded-lg'>Start now</button></a>
        </div> 
    </div>
  )
}

export default Hero
