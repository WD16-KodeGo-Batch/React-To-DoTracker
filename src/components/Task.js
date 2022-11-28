import React from 'react'
import {FaTimes} from 'react-icons/fa'
const Task = ({task, onDelete}) => {
  return (
    <div className='task'>
        <h3>
            {task.text}
            <FaTimes style={deleteIcons} onClick={()=> onDelete(task.id)} />
        </h3>
        <p className='task__p'>{task.day}</p>
    </div>
  )
}

//NOTE: A STATE gets passed down an ACTION gets passed up

const deleteIcons = {
    color:'red', 
    cursor:'pointer'
}

export default Task