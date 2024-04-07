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
    setTodoData(todos)
  }
  return (
    <div>
    <TodoAdd  HandleAdd={HandleAdd}/>

   {
    todos.map((ele)=>{
      return <div style={{border:"1px solid black" ,padding:"10px",margin:"20px"}}>
        <p>{ele.id}</p>
        <p>{ele.title}</p>
        <p>{ele.status?"Completed" : "Pending"}</p>
      </div>
    })
   }
    </div>
  )
}

export default Todo