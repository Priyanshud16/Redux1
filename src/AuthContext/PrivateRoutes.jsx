import React, { useContext } from 'react'
import { AuthContext } from './Auth'
import { Navigate } from 'react-router-dom'

function PrivateRoutes() {
    const {Auth}=useContext(AuthContext)
  return (
    Auth.isAuth? children : <Navigate to='/'/>
  )
}

export default PrivateRoutes