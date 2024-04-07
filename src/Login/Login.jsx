import axios from 'axios'
import React, { useContext, useReducer, useState } from 'react'
import { LoginReducer } from './LoginRedux/reducer'
import { useSelector } from 'react-redux'
import { AddTodo } from '../redux/action'
import { AuthContext } from '../AuthContext/Auth'
import {useNavigate} from 'react-router-dom'
import { Input } from '@chakra-ui/react'

// const defaultState={
//     email:"",
//     password:""
// }
    
// const LoginReducer=(state=defaultState,action)=>{
//     switch(action.type){
//         case 'email':{
//             return {...state,email:action.payload}
//         };
//         case 'password':{
//             return {...state,password:action.payload}
//         }
//         case 'SUCCESS':{
//             return {...state,email:action.payload,password:action.payload}
//         }
//         default:{
//             return state
//         }
//     }
// }
function Login() {
    const State=useSelector((state)=>state.login)
    const {LoginUser}=useContext(AuthContext)
    const [state,dispatch]=useReducer(LoginReducer,{
        email:"",
        password:""
    })
    const navigate=useNavigate()
    const {email,password}=state
    const HandleChange=(e)=>{
   const {name,value}=e.target
   dispatch({ type: name, payload: value }); 
    }

    const HandleSubmit=async(e)=>{
    e.preventDefault()

    try {
        const {data}=await axios({
            url:"https://reqres.in/api/login",
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            data:{email,password}
        })
        dispatch({type:"SUCCESS"})
        LoginUser(data.token)
         navigate('/todo')
       
    } catch (error) {
        
    }

    }
   
  return (
    <div>
        <form onSubmit={HandleSubmit}>
        <Input type="text" placeholder='Enter Your Email' name='email' onChange={HandleChange} w={300} />
        <br />
        <br />
        <Input type="password" placeholder='Enter Your Password' name='password' onChange={HandleChange} w={300} />
        <br />
        <button style={{marginTop:"10px",border:"1px solid black",width:"100px"}}>Submit</button>
        </form>
    </div>
  )
}

export default Login