import React,{useState} from 'react'
import Task from './Task'
//import {useState} from 'react'
// A state is immutable > one-way data 
const Tasks = ({tasks, onDelete, onToggle}) => {
  return (
    <>
    {tasks.map((task)=>(
     <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/>))}
    </>
  )
}

export default Tasks
