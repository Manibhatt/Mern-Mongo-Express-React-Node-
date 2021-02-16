import React from 'react'
import './BackDrop.css'
function BackDrop({ show, click }) {
  return (
    show && <div onClick={click} className='backdrop'></div>
  )
}

export default BackDrop
