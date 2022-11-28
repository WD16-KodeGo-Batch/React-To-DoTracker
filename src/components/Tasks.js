import React,{useState} from 'react'
import Task from './Task'
//import {useState} from 'react'
// A state is immutable > one-way data 
const Tasks = ({tasks, onDelete}) => {
  return (
    <>
    {tasks.map((task)=>(
     <Task key={task.id} task={task} onDelete={onDelete}/>))}
    </>
  )
}

export default Tasks
