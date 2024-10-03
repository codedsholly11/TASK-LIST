"use client"
import { createContext, useEffect, useState } from "react";

    export const AppContext = createContext()

    export function AppContextProvider({children}) {

        const[userInfo, setUserInfo] = useState(()=>{
            const user = localStorage.getItem("token")
            return user? JSON.parse(user): null

        })

        const[bgColor, setBgColor] = useState(()=>{
            const bgColor = localStorage.getItem("bgColor")
            return bgColor ? bgColor: "white"
        })

        const[color, setColor] = useState(()=>{
            const color = localStorage.getItem("color")
            return color ? color: "black"
        })
        
        function handleBg(bg, color) {
            if (bgColor === "white"){
                localStorage.setItem("color", color)
                localStorage.setItem("bgColor", bg)
                setBgColor(bg);
                setColor(color)
                
            }else{
                localStorage.setItem("color", "black")
                localStorage.setItem("bgColor", "white")
                setBgColor("white");
                setColor("black");
                
            }
        }
        const logout = ()=>{
            localStorage.removeItem("token")
            window.location.href = "/Login"
        }

        useEffect(()=>{
            if (userInfo) {
                return localStorage.setItem("token", JSON.stringify(userInfo))
            }else{
                return localStorage.removeItem("token")
            }
            
        },[userInfo])

        return(
            <AppContext.Provider value={{ userInfo, setUserInfo, bgColor, color, handleBg, logout}}>
                {children}
            </AppContext.Provider>
        )













}