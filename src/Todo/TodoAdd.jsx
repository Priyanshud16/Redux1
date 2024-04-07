import React, { useState } from 'react'
import { Input } from '@chakra-ui/react'

function TodoAdd({HandleAdd}) {
  const [text,setText]=useState([])

  const HandleSubmit=(e)=>{
    e.preventDefault()
    HandleAdd(text)
  }
  return (
    <div>
      <form onSubmit={HandleSubmit}>
      <Input type="text" onChange={(e)=>setText(e.target.value)} placeholder='Enter Your Task' w={300} />
      <button style={{marginLeft:"20px"}}>Add</button>
      </form>
    </div>
  )
}

export default TodoAdd