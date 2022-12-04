//en son addtask yaptıgımda baya zorlanmıştım. form kısmında inputları doldururken ugrastım
//inputlara ayrı ayrı useState kullanmak gerekiyor. bu stateleri onSubmite yolluyoruz 
//onChange lerin içine FONKSİYON yazıyoruz. daha fazla kopya yok. 
//preventDefault sayfanın yenilenmesini engelliyor

//yine en son yaparken Validation kısmını direk kopya yazdım. zor değil ama hatırlaması zor.bir ton ıvır zıvır

import React from 'react'
import { useState } from 'react'

export const AddTask = (props) => {
    const [taskName, setTaskName] = useState("")
    const [taskDay, setTaskDay] = useState("")
    const [reminder, setReminder] = useState("")
 
    const onSubmit = (e) =>{
        e.preventDefault()
        //validations
        if(!taskName || !taskDay) {
            alert("please fill the form")
            return
        }
        props.onAdd({taskName,taskDay,reminder})

        setTaskName("")
        setTaskDay("")
        setReminder(false)
    }

  return (
    <div style={props.toggleAdd ? { display:"flex"} :{display:"none"}}>
        <form onSubmit={onSubmit}>
            <label> Task name </label>
            <input type={"text"} placeholder={"interview"} value={taskName}
              onChange={(e)=>{setTaskName(e.target.value)} }
            ></input>

            <label> Task day </label>
            <input type={"text"} placeholder={"saturday"} value={taskDay}
             onChange={(e)=>{setTaskDay(e.target.value)}}></input>

            <label> Alarm </label>
            <input type={'checkbox'} checked={reminder}  value={reminder}
               onChange={(e)=>{setReminder(e.currentTarget.checked)} }
            ></input>
            <input type={"submit"} value={"submit"} ></input>
            
        </form>
    </div>
  )
}
