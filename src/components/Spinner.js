import React from 'react'
import Beer from  '../images/Beer loader.gif'

export default function Spinner() {
  return (
    <div className='universal spin-box'>
      <img className='beer-gif' src={Beer} alt="" />
    </div>
  )
}
