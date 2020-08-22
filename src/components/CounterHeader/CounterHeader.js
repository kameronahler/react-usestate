import React from 'react'

export default function CounterHeader({ headingText, descriptionText }) {
  return (
    <header>
      <h4>{headingText}</h4>
      <p>{descriptionText}</p>
    </header>
  )
}
