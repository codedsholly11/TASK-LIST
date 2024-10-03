"use client"  

import React, { useContext } from 'react'
import Nav from '../Components/Nav'
import Home from './Homepage/Home'
import { AppContextProvider, AppContext } from '../Context/AppContext'

const page = () => {
  const  {userInfo, setUserInfo, bgColor, color, handleBg, logout} = useContext(AppContext)

  return (
    <div className={`bg-[${bgColor}] text-[${color}]`}>
          <Nav/>
          <Home/>
    </div>
  )
}


export default page

