import React from 'react'

function TodoItem({id,title,status}) {
  return (
    <div style={{border:"1px solid black",padding:"20px",margin:"20px"}}>
      <p>Id:{id}</p>
      <p>Title:{title}</p>
      <p>Status:{status ? "Completed" : "Pending"}</p>
    </div>
  )
}

export default TodoItem