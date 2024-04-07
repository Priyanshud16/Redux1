import React, { useState } from 'react'
import TodoAdd from'./TodoAdd'
import { useDispatch, useSelector } from 'react-redux'
import { AddTodo } from '../redux/action'
import TodoItem from './TodoItem'
function Todo() {
  const todos = useSelector((state) => state.todos);

const dispatch=useDispatch()

  const HandleAdd=(text)=>{
    const newTodo={
      id:Date.now(),
      title:text,
      status:false
    }
   
    dispatch(AddTodo(newTodo))
  }


  return (
    <div>
    <TodoAdd  HandleAdd={HandleAdd}/>

   {
    todos.map((ele)=>{
      return <TodoItem {...ele}/>
    })
   }
    </div>
  )
}

export default Todo