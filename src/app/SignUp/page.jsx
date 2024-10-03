"use client"
import React, {useContext, useState} from 'react'
import Nav from '../../Components/Nav'
import { AppContext } from '../../Context/AppContext'

const Signup = () => {
    const {bgColor, color} = useContext(AppContext)
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [confirmPassword, setConfirmPassword] = useState()
 
        const handleSubmit = async(e)=>{

            e.preventDefault();
            try {
                const baseurl = "https://todo-app-backend-fvls.onrender.com/register"
                const response= await fetch (baseurl,{
                    method :"POST",
                    body: JSON.stringify({username, email, password, confirmPassword,}),
                    headers:{
                        "content-type":"application/json"
                    }
                })
                if (response.ok){
                    const responseData = await response.json();
                    console.log(responseData.message);
                }else{
                    const err = await response.json()
                    console.log(err.message); 
                    
                }  
                
            } catch (error) {
                console.log(error.message);
                
            }
        }

  return (
   <div className={bgColor === "black" ? "bg-black text-white" : "bg-white text-black"}>
    <Nav/>
     <div className='w-[100%] h-[] flex flex-col items-center text-center  py-[20px]'>
        <div className='flex flex-col gap-[20px]'>
            <h1 className='font-bold md:text-4xl text-2xl'>TASK <span className='text-[#bf616a]'>LIST</span></h1>
            <h1 className='text-3xl font-semibold'>Create your account</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-[30px]'>
                <div>
                    <p className='text-start text-xl'>User Name</p>
                    <input className='md:w-[30vw] w-[90vw] py-[8px] bg-[#e5f4fb] px-[10px] rounded-lg outline-none ' type="text" name='name' placeholder='User name' onChange={(e)=>{setUsername(e.target.value)}} />
                </div>
                <div>
                    <p className='text-start text-xl'>Email Address</p>
                    <input className='md:w-[30vw] w-[90vw] py-[8px] bg-[#e5f4fb] px-[10px] rounded-lg outline-none'  type="text" name='email' placeholder='kissme@gmail.com' onChange={(e)=>{setEmail(e.target.value)}} />
                </div>
                <div>
                    <p className='text-start text-xl'>Password</p>
                    <input className='md:w-[30vw] w-[90vw] py-[8px] bg-[#e5f4fb] px-[10px] rounded-lg outline-none'  type="text" name='password' placeholder='*********' onChange={(e)=>{setPassword(e.target.value)}} />
                </div>
                <div>
                    <p className='text-start text-xl'> Confirm Password</p>
                    <input className='md:w-[30vw] w-[90vw] py-[8px] bg-[#e5f4fb] px-[10px] rounded-lg outline-none'  type="text" name='confirm password' placeholder='*********' onChange={(e)=>{setConfirmPassword(e.target.value)}} />
                </div>
                <div>
                <button className='bg-[#bf616a] text-white md:w-[18vw] w-[90vw] py-[8px] rounded-lg'>Let's start</button>
                </div>
            </form>
            <div>
                <p className=''>Already have an account? <a href="/Login"><span className='text-[#bf616a] cursor-pointer text-[15px] font-bold'>Log in</span></a></p>
            </div>
        </div>
    </div>
   </div>
  )
}

export default Signup
