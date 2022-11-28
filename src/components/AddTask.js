import React from 'react'
import {useState} from 'react'

const AddTask = ({onAdd}) => {
  const [text, setText] = useState('');
  const [day, setDay] = useState('');
  const [reminder, setReminder] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault()

    //Check for validation for the task text
    // If not text then state for setText
    // connect to input type text if its not therr or empty
    // alert 'Please add task'

    if(!text){
        alert('Please add task!')
        return
    }
    
    onAdd({text, day, reminder})
    setText('')
    setDay('')
    setReminder(false)


  }

  return (
    <form onSubmit={onSubmit} className='form form--add'>
        <div className='form__controller'>
            <label className='form__label'>Task</label>
            <input className='form__input' type='text' placeholder='Add New Task' 
            value={text} onChange={(e)=> setText(e.target.value)}/>
        </div>
        <div className='form__controller'>
            <label className='form__label'>Day & Time</label>
            <input className='form__input' type='text' placeholder='Add Day & Time' 
             value={day} onChange={(e)=> setDay(e.target.value)} />
        </div>
        <div className='form__controller--check'>
            <label className='form__label--check'>Save Reminder</label>
            <input className='form__input--check' type='checkbox' checked={reminder}
            value={reminder} onChange={(e)=> setReminder(e.target.checked)}/>
        </div>
        <input className='btn btn--block' type='submit' value='Save Task' />
        

    </form>
  )
}

export default AddTask