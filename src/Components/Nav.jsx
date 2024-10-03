"use client"
import React, {useContext} from 'react'
import { MdOutlineLightMode } from "react-icons/md";
import { MdDarkMode } from "react-icons/md";
import { AppContext } from '../Context/AppContext';


const Nav = () => {
  
  const {bgColor, color, handleBg, logout, userInfo} = useContext(AppContext)

  let isLoggedin = userInfo?.token;
  
  return (
    <div className={`bg-[${bgColor}] text-[${color}]`}>
         <nav className='w-[100%] flex items-center justify-between fixed px-[30px] py-[10px] bg-slate-400 '>
           <a href="/"><h1 className='text-2xl font-bold'>TASK <span className='text-[#bf616a]'>LIST</span></h1></a>
           <div className='flex items-center justify-center gap-[30px]'>
              <button className='md:text-[50px] text-[30px]' onClick={()=>{handleBg("black", "white")}}>{bgColor === "white" ? <MdOutlineLightMode /> :<MdDarkMode />}</button>
              {
                isLoggedin ? 
                <button onClick={()=>{logout()}} className='bg-[#bf616a] md:w-[8vw] w-[20vw] font-bold text-white py-[8px] rounded-lg'>Log out</button>
                :
                <a href="/Login"><button className='bg-[#bf616a] md:w-[8vw] w-[20vw] font-bold text-white py-[8px] rounded-lg'>Log In</button></a>
              }
           </div>
        </nav>
      
    </div>
  )
}

export default Nav
