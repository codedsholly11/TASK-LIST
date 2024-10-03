import React from 'react'
import Image from 'next/image'

const Clear = () => {
  return (
    <div className='flex flex-col-reverse md:flex-row gap-[40px] items-center justify-center mb-[40px]'>
      <div className='md:w-[42vw] w-[90vw] flex flex-col gap-[30px] md:items-start items-center text-center md:text-start'>
        <p className='text-[#bf616a] font-bold md:text-xl text-4xl'>Clear your mind</p>
        <h2 className='md:text-5xl text-3xl font-bold'>The fastest way to get tasks out of your head.</h2>
        <p className='text-xl'>Type just about anything into the task field and  <span className='text-[#bf616a]'>Task-List’s</span> one-of-its-kind natural language recognition will instantly fill your to-do list.</p>
      </div>
      <div>
        <Image className='rounded-2xl md:w-[40vw] w-[90vw] ' src={"/man.jpg"} alt="" width={600} height={700} />
      </div>
    </div>
  )
}

export default Clear
