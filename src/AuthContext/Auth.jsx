import React, { createContext, useState } from 'react'

export const AuthContext=createContext()
function AuthContextProvider({children}) {
    const [Auth,setAuth]=useState({
        isAuth:false,
        token:null
    })

    const LoginUser=(token)=>{
        setAuth((prev)=>({
            ...prev,
            token:token,
            isAuth:true
        }))
    }

    const LogoutUser=()=>{
       setAuth((prev)=>({
        ...prev,
        token:null,
        isAuth:false
       }))
    }
  return (
    <div>
<AuthContext.Provider value={{LoginUser,LogoutUser,Auth}}>
    {children}
</AuthContext.Provider>
    </div>
  )
}

export default AuthContextProvider