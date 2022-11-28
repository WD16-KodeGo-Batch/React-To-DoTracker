import React from 'react'

const AddTask = () => {
  return (
    <form className='form form--add'>
        <div className='form__controller'>
            <label className='form__label'>Task</label>
            <input className='form__input' type='text' placeholder='Add New Task' />
        </div>
        <div className='form__controller'>
            <label className='form__label'>Day & Time</label>
            <input className='form__input' type='text' placeholder='Add Day & Time' />
        </div>
        <div className='form__controller--check'>
            <label className='form__label--check'>Save Reminder</label>
            <input className='form__input--check' type='checkbox' />
        </div>
        <input className='btn btn--block' type='submit' value='Save Task' />
        

    </form>
  )
}

export default AddTask