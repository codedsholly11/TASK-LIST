import React from 'react'
import Nav from '../Components/Nav'

const Login = () => {
  return (
    <div>
        <Nav/>
        <div className='w-[100%] h-[100vh] flex flex-col items-center text-center  py-[20px] '>
        <div className='flex flex-col   bg-[#ffffff]  gap-[40px]'>
            <h1 className='font-bold md:text-4xl text-2xl'>TASK <span className='text-[#bf616a]'>LIST</span></h1>
            <h1 className='text-3xl font-semibold'>Welcome back</h1>
            <div>
                <p className='text-start text-xl'>Email Address</p>
                <input className='md:w-[30vw] w-[90vw] py-[8px] bg-[#e5f4fb] px-[10px] rounded-lg'  type="text" name='email' placeholder='kissme@gmail.com' />
            </div>
            <div>
                <p className='text-start text-xl'>Password</p>
                <input className='md:w-[30vw] w-[90vw] py-[8px] bg-[#e5f4fb] px-[10px] rounded-lg'  type="text" name='password' placeholder='*********' />
            </div>
            <div>
                <a href="/Create"><button className='bg-[#bf616a] md:w-[18vw] w-[90vw] py-[8px] rounded-lg'>Log in</button></a>
            </div>
            <div>
                <p className=' '>Don't have an account <a href="/SignUp"><span className='text-[#bf616a] text-[15px] font-bold'>Sign up</span></a></p>
            </div>
        </div>
    </div>
    </div>
    
  )
}

export default Login
