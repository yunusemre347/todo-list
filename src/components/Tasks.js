import React, { useState,useEffect } from 'react'
import {Task} from "./Task"
import { AddTask } from './AddTask';
import { Button } from './Button';


export const Tasks = () => {
    const [taskList, setTaskList]= useState([])
    const[toggleAdd, setToggleAdd]=useState(false)
    

    const tasksToDo = [
    {
        taskName: "work",
        taskDay: "wednesday",
        reminder: true,
        id:0
    },
    {
        taskName: "school",
        taskDay: "monday",
        reminder: true,
        id:1
    },
    {
        taskName: "exam",
        taskDay: "friday",
        reminder: false,
        id:2
    },]
    useEffect(()=>{
        setTaskList(tasksToDo)
         },[])
        
         //ALARM
    const toggleReminder = (id) =>{
      
        //reminder = !reminder

        setTaskList( taskList.map((event)=>( event.id===id ? {...event, reminder : !event.reminder }: event )) )
          //reminderi tanımlarken propsa göre mi todo ya göremi diye sorun yaşayacagım+id
          //id yi çektik. buradan direk prop olarak gönderiyoruz. componentte dive eklerken fonk olarak ekleyip id mizi tanımlıyoruz

    }

    //DELETE TASK
    const deleteTask = (id) =>{

       setTaskList( taskList.filter((event)=>event.id!==id))
       //burada takıldım. neden?
       // filterin içine if li statement yazmaya çalıştım. yani aslında map le yaptıgım şey.
       // ama filterin zaten kendi işini yapan fonksiyon var yukarda görüldüğü gibi.
       //şartı sağlamayan kapı dışarı oluyor otomatik. 
       
       //deletetaskta belirttiğimiz id uyuşunca id eşleşmesi yapılıyor.

    }
    //ADD TASK
    //e.target.value falan olacak
    const addTask = (task)=>{
        console.log(task)
        console.log(taskList.length)
        const id=taskList.length
        const newTask={...task,id}
         setTaskList([...taskList,newTask ])
    }
    //Hide button
    const showAdd=()=>{
        setToggleAdd(!toggleAdd)
        console.log(toggleAdd)
    }

  return (
    <div>
       <ul>
         {taskList.map((event)=>( <li key={event.id}><Task onDelete={deleteTask} onToggle={toggleReminder} event={event} /></li>)) }
       </ul>
       <Button onClick={showAdd} toggleAdd={toggleAdd} />
      <AddTask toggleAdd={toggleAdd} onAdd={addTask} taskList={taskList}/>

    </div>
  )
}
