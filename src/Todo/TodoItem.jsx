import React from 'react'

function TodoItem({id,title,status}) {
  return (
    <div style={{border:"1px solid black"}}>
      <p>Id:{id}</p>
      <p>Title:{title}</p>
      <p>Status:{status ? "Completed" : "Pending"}</p>
    </div>
  )
}

export default TodoItem