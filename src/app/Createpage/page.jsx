"use client"
import Nav from '@/Components/Nav'
import { AppContext } from '@/Context/AppContext'
import React, { useContext, useState } from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const page = () => {

    const {userInfo} = useContext(AppContext)

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const handleCreate = async(e)=>{
        e.preventDefault();

        try {
            console.log(JSON.stringify({title, description}));
        

        const response = await fetch("https://todo-app-backend-fvls.onrender.com/api/v1/create-todo", {
            method:"POST",
            headers:{
                "Authorization":"Bearer " + userInfo.token,
                "content-type":"application/json"
            },
            body: JSON.stringify({title, description})
        });

        const responseData = await response.json();

        if(response.ok){
            window.location.href = '/dashboard'
        }else{
            alert(responseData.error)
        }
        } catch (error) {
            alert(error.message)
        }
        
    }
    const [show, setShow] = useState(true);
    function tope(){
      setShow(!show)
    }
  return (
   <div>
    <Nav/>
    <button onClick={tope} className='text-[25px] pt-[10px] px-[50px]'>
            {show ? <MdClose /> : <AiOutlineMenuUnfold /> }
      </button>
        {/* <section className='flex items-start'> */}
       {show && 
          <nav className='flex items-center px-[50px] justify-center text-lg w-[20vw] h-[70vh] absolute shadow-[0_3px_10px_rgb(0,0,0,0.2)]'>
            <ul className='flex flex-col items-start justify-center gap-[30px]  absolute'>
              
              <div className='font-bold'>Focus</div>
              <li>Dashoard</li>
              <li>All todo</li>
              <a href="/Createpage"><li>Create todo</li></a>
              <li>settings</li>
              <li className=' cursor-pointer' onClick={()=>{logout()}}>logout</li>
            </ul>
          </nav>
        }
    <div className='flex flex-col items-center pt-[90px] w-[100%] h-[100vh]'>
        <p className='text-4xl font-bold'>Welcome!, <span className='text-2xl font-bold text-[#bf616a]'>  Please Create New Task</span></p>
        <form  className='flex flex-col gap-3 border-black border-[2px] rounded-md p-[40px] w-[50vw] items-center m-[20px]'>
            <input type="text" className='border-[1px] border-black w-[40vw] p-[10px] rounded-md' name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} placeholder="Enter task name" />
            <input className='border-[1px] w-[40vw] border-black p-[10px] rounded-md' name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} id="" cols="75" rows="5" placeholder='Enter new task' />
            <input className='border-[1px] w-[30vw]' type="datetime-local" name="" id="" />
            <button onClick={handleCreate} type="submit" className='bg-blue-400 text-white p-[7px] w-[13vw] rounded-lg'>Add</button>
        </form>
    </div>
   </div>
  )
}

export default page
