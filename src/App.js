// This is the APP ROOT COMPONENT - APP LEVEL STATE

import React, {useState} from 'react'
//import {useState} from 'react'
import Header from './components/Header';
import Tasks from './components/Tasks'

const App = () => {
  
const [tasks, setTask] = useState([
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
    setTask(tasks.filter((task)=>task.id !== id))
  }

  return (
    <div className='container'> 
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask}/>
      {/* <h1 style={{textAlign:'center'}}>HELLO WORLD! This is my first REACT APP</h1> */}
    </div>
  )
}

export default App