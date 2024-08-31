import React from 'react'

const Nav = () => {
  return (
    <div>
         <nav className='w-[100%] flex items-center justify-between fixed px-[30px] py-[10px] bg-slate-400 '>
           <a href="/"><h1 className='text-2xl font-bold'>TASK <span className='text-[#bf616a]'>LIST</span></h1></a>
            <a href="/Login"><button className='bg-[#bf616a] md:w-[8vw] font-bold text-white py-[8px] rounded-lg'>Log in</button></a>
        </nav>
      
    </div>
  )
}

export default Nav
