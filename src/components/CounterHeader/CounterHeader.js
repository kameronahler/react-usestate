import React from 'react'

export default function CounterHeader({ headingText, descriptionText }) {
  return (
    <header className='counter__header'>
      <h4 className='counter__heading'>{headingText}</h4>
      <p className='counter__description'>{descriptionText}</p>
    </header>
  )
}
