import React from 'react'

export const Button = (props) => {
  return (
   <button onClick={props.onClick}>
    {props.toggleAdd ? "Hide" : "Add New Reminder"}
   </button>
  )
}
