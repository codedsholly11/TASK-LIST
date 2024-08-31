import React from 'react'
import Image from 'next/image'

const Focus = () => {
  return (
    <div className='flex gap-[40px] items-center justify-center mb-[40px] py-[30px]'>
        <div>
            <Image className='rounded-2xl' src={"/woman.jpeg"} alt="" width={600} height={700} />
        </div>
        <div className='w-[40vw] flex flex-col gap-[30px] items-start'>
            <p className='text-[#8a2be2] font-bold text-xl'>Focus on what’s important</p>
            <h2 className='text-5xl font-bold'>Reach that mental clarity you’ve been longing for.</h2>
            <p className='text-xl'>Your tasks are automatically sorted into Today, Upcoming, and custom filter views to help you prioritize your most important work.</p>
        </div>
    </div>
  )
}

export default Focus
