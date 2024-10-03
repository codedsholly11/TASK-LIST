"use client"
import React, { useState, useContext } from 'react'
import Nav from '../../Components/Nav'
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { FaRegEyeSlash } from "react-icons/fa6";
import { AppContext } from '../../Context/AppContext'; 

const Login = () => {
    const {bgColor, color, setUserInfo} = useContext(AppContext)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [redirect, setRedirect] = useState(false)
    
    const[showPassword, setShowPassword] = useState(false)
    const toggle = () =>{
        setShowPassword(!showPassword)
    }

    const handleLogin = async(e)=>{
    
        e.preventDefault();
            try {
                const baseurl="https://todo-app-backend-fvls.onrender.com/login"
                const response = await fetch(baseurl,{
                    method :"POST",
                    body: JSON.stringify({email, password}),
                    headers:{
                        "content-type":"application/json"
                      }
                })
                if(response.ok){
                    const responseData = await response.json();
                    console.log(responseData);
                    localStorage.setItem("token", responseData.token);
                    
                    setUserInfo(responseData);

                    // this update redirect to true
                    setRedirect(true)
                  }else{
                    const err = await response.json()
                    alert(err.error);

                }

            } catch (error) {
                console.log(error.message);
            }
}
// this is where redirection took place
if(redirect){
  return window.location.href = "/dashboard"
}

  return (
    <div className={bgColor === "black" ? "bg-black text-white" : "bg-white text-black"}>
        <Nav/>
        <div className='w-[100%] h-[100vh] flex flex-col items-center text-center justify-center  py-[20px] '>
        <div className='flex flex-col gap-[40px]'>
            <h1 className='font-bold md:text-4xl text-2xl'>TASK <span className='text-[#bf616a]'>LIST</span></h1>
            <h1 className='text-3xl font-semibold'>Welcome back</h1>
          <div className='flex flex-col gap-[30px]'>
                <div>
                    <p className='text-start text-xl  font-bold'>Email Address</p>
                    <input className='md:w-[32vw] w-[90vw] text-2xl py-[8px] bg-[#e5f4fb] px-[10px] rounded-lg outline-none'  type="text" name='email' placeholder='kissme@gmail.com' onChange={(e)=>{setEmail (e.target.value)}} />
                </div>
                <div>
                    <p className='text-start text-xl font-bold'>Password</p>
                    <div className='bg-[#e5f4fb] rounded-lg px-[5px] gap-[8px]'>
                    <input className=' md:w-[28vw] w-[80vw] text-2xl outline-none py-[8px]  px-[10px]'  type={showPassword ? "text" : "password"} name='password' placeholder='*********' onChange={(e)=>{setPassword(e.target.value)}} />
                    <button className='text-black' onClick={toggle}>{showPassword ? <FaRegEyeSlash  /> : <MdOutlineRemoveRedEye />  }</button>
                    </div>
                </div>
                <div>
                    <button onClick={handleLogin} className='bg-[#bf616a] md:w-[18vw] w-[50vw] py-[8px] rounded-lg'>Log in</button>
                </div>
                <div>
                    <p className='text-blue-800 font-bold text-xl'><a href="/Forget">Forget password ?</a></p>
                    <p className='text-xl '>Don't have an account <a href="/SignUp"><span className='text-[#bf616a] text-[15px] font-bold'>Sign up</span></a></p>
                </div>
          </div>
        </div>
    </div>
    </div>
    
  )
}

export default Login
