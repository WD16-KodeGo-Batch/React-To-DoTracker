// This is the APP ROOT COMPONENT - APP LEVEL STATE

import React, {useState} from 'react'
//import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'

const App = () => {
  
const [tasks, setTasks] = useState([
  {
      id:1,
      text: 'Web dev work',
      day: 'Nov26 at 8:00am',
      reminder: true
  },
  {
      id:2,
      text: 'Buy grocery',
      day: 'Nov26 at 11:00am',
      reminder: true
  },
  {
      id:3,
      text: 'Dentist appointment',
      day: 'Nov26 at 1:00am',
      reminder: false
  }
]);

//DELETE A TASK 
  const deleteTask = (id) =>{
   /*  alert('delete task event')
    console.log('This is a delete task', id); */
    setTasks(tasks.filter((task)=>task.id !== id))
  }

// TOGGLE TASK 

const toggleActive = (id) => {
  // console.log(id);
  setTasks(tasks.map((task)=>task.id === id ?
  {...task, reminder : !task.reminder } : task
  ))
}

  return (
    <div className='container'> 
      <Header />
      <AddTask />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleActive}/> : 'No tasks to accomplish'}
      {/* <h1 style={{textAlign:'center'}}>HELLO WORLD! This is my first REACT APP</h1> */}
    </div>
  )
}

export default App
