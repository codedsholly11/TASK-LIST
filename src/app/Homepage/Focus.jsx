import React from 'react'
import Image from 'next/image'

const Focus = () => {
  return (
    <div className='flex flex-col md:flex-row gap-[40px] items-center justify-center mb-[40px] py-[30px]'>
        <div>
            <Image className='rounded-2xl md:w-[42vw] w-[90vw]' src={"/g2.jpg"} alt="" width={600} height={700} />
        </div>
        <div className='md:w-[40vw] w-[90vw] flex flex-col gap-[30px] md:items-start items-center text-center md:text-start'>
            <p className='text-[#8a2be2] font-bold md:text-xl text-4xl'>Focus on what’s important</p>
            <h2 className='md:text-5xl text-3xl font-bold'>Reach that mental clarity you’ve been longing for.</h2>
            <p className='text-lg'>Your tasks are automatically sorted into Today, Upcoming, and custom filter views to help you prioritize your most important work.</p>
        </div>
    </div>
  )
}

export default Focus
