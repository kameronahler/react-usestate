import React, { useState } from 'react'
import CounterHeader from '../CounterHeader/CounterHeader'
import CounterButton from '../CounterButton/CounterButton'
import CounterDisplay from '../CounterDisplay/CounterDisplay'

export default function StateFunction() {
  // using a function here takes an argument, and then returns a value for the
  // state, allowing you to use an existing state later (but here we are setting
  // it for the first time)
  const [stateFunction, setStateFunction] = useState(() => {
    const initialState = 0
    return initialState
  })

  const changeCount = (e) => {
    setStateFunction(
      e.currentTarget.dataset.increase === 'true'
        ? (prevStateFunction) => prevStateFunction + 1
        : (prevStateFunction) => prevStateFunction - 1
    )
  }

  return (
    <>
      <CounterHeader
        headingText={'Set state initially with function'}
        descriptionText={
          'Will only be run on initial load mount, allowing for expensive logic initially, and basic changes later'
        }
      />
      <CounterButton click={changeCount} increase={'false'} />
      <CounterDisplay value={stateFunction} />
      <CounterButton click={changeCount} increase={'true'} />
    </>
  )
}
