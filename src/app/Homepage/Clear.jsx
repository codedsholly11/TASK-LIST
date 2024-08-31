import React from 'react'
import Image from 'next/image'

const Clear = () => {
  return (
    <div className='flex gap-[40px] items-center justify-center mb-[40px]'>
      <div className='w-[40vw] flex flex-col gap-[30px] items-start'>
        <p className='text-[#bf616a] font-bold text-xl'>Clear your mind</p>
        <h2 className='text-5xl font-bold'>The fastest way to get tasks out of your head.</h2>
        <p className='text-xl'>Type just about anything into the task field and Todoist’s one-of-its-kind natural language recognition will instantly fill your to-do list.</p>
      </div>
      <div>
        <Image className='rounded-2xl' src={"/man.jpg"} alt="" width={600} height={700} />
      </div>
    </div>
  )
}

export default Clear
