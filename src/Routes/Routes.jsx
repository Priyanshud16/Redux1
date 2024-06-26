import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from '../Login/Login'
import Todo from '../Todo/Todo'
import PrivateRoutes from '../AuthContext/PrivateRoutes'
function RoutesApp() {
  return (
    <div>
       <Routes>
       <Route path='/' element={<Login/>}/>
       <Route path='/todo' element={
       <PrivateRoutes>
      <Todo/>
       </PrivateRoutes>
       }/>
       </Routes>
    </div>
  )
}

export default RoutesApp