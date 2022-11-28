import React from 'react'
import PropTypes from 'prop-types'
import Button from './Button'

// Second exmple DESTRUCTURING and overriding using the .defaultProps
const Header = ({title}) => {
  const onClick = () => {
    console.log('Test event object')
    alert('Test alert for an onClick event')
  } 
  return (
    <header className='header'>
      <Button text='Add' color='green' onClick={onClick} />
      {/* <Button text='Del' color='red' /> */}
      
      <h1>Task-Tracker</h1>
    </header>
  )
}


Header.defaultProps = {
  title: 'To do list'
}


Header.propTypes = {
  title: PropTypes.string.isRequired,
  
}
/* 
const headingStyle = {
  textAlign:'center', 
  backgroundColor:'green', 
  color:'white'
} */
export default Header 


/* FIRST EXAMPLE OF USING PROPS
const Header = (props) => {
  return (
    <header>
      <h1 style={{textAlign:'center'}}>RBSL Todo-List-Tracker</h1>
      <h2>{props.title}</h2>
    </header>
  )
}

export default Header 
 */
