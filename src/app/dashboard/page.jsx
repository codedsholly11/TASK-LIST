"use client"
import { AppContext } from '@/Context/AppContext';
import { ActionPathnameNormalizer } from 'next/dist/server/future/normalizers/request/action';
import React,{useContext, useEffect, useState} from 'react'
import { AiOutlineMenuUnfold } from "react-icons/ai";
import { MdClose } from "react-icons/md";


const Dashboard = () => {

  const {userInfo, logout} = useContext(AppContext)

  const [user, setUser] = useState({})
  const [todo, settodo] = useState([])

  const fetUserDetails = async()=>{
    const response = await fetch("https://todo-app-backend-fvls.onrender.com/dashboard", {
      headers:{
        "Authorization":"Bearer " + userInfo.token
      }
    });

    const userData = await response.json();
    if(response.ok){
      setUser(userData.user);
      settodo(userData?.allTodos)
    }else{

      window.location.href="/Login"
    }


    console.log(userData.allTodos);
    
  }


  useEffect(()=>{
    fetUserDetails()
  }, [user])
  const [show, setShow] = useState(true);
  function slidShow(){
    setShow(!show)
  }

  if(!userInfo){
    return window.location.href = "/Login"
  }

  return (
    <div>
      <button onClick={slidShow} className='text-[25px] pt-[10px] px-[50px]'>
            {show ? <MdClose /> : <AiOutlineMenuUnfold /> }
        </button>
        <section className='flex items-start'>
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
        <main className='flex flex-col gap-[30px] items-center pb-[50px] w-[100%] '>
          <legend className='text-2xl'>Welcome {user?.username}</legend>
          <hgroup className='flex flex-col gap-[20px] items-center'>
             <strong className='border-b-[2px] border-solid border-black text-4xl p-[10px] w-[53vw] text-center'>Track Your Tasks</strong>
              <section  className='flex gap-[50px] p-[30px] w-full'>
             

<table className='w-full border-collapse'>
                  <tr className='w-[80%]'>
                    <th className='border py-2 px-5 bottom-1'>Task Name</th>
                    <th className= "border py-2 px-5 bottom-1">Status</th>
                    <th className='border py-2 px-5 bottom-1'>Action</th>
                  </tr>
                 {
                  todo.length >= 0 ? 
                   todo && todo.map((td, index)=>(
                  <tr className='w-full' key={index}>
                    <td>{td.title}</td>
                    <td className={`${td.status === "completed" ? 'text-green-600' : "text-orange-400"}`}>{td.status}</td>
                    <td className=''>
                    <select name="" id="">
                    <option value="">...</option>
                    <option value="">Edit</option>
                    <option value="">Delete</option>
                  </select>
                    </td>

                  </tr>
                  
                  )): <h2>No Todos created yet!</h2>

                }

                </table>
              </section>
              <button className='bg-blue-400 text-white px-[20px] py-[8px] rounded-lg'>Show All</button>
          </hgroup>
       
        </main>
       </section>
    </div>
  )
}

export default Dashboard