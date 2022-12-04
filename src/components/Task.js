import React from 'react'
import {FaTimes} from "react-icons/fa"

export const Task = (props) => {
   // console.log(props.event)

  return (
    <div className='task' onDoubleClick={()=>props.onToggle(props.event.id)} style={props.event.reminder ? {borderLeft:"solid green 6px"}: {borderLeft:"solid red 6px"}}>
        <h3>{props.event.taskDay}</h3>
      <p>{props.event.taskName} </p>
     <FaTimes style={{cursor:"pointer"}} onClick={()=> props.onDelete(props.event.id)}/>

    </div>
  )
}
