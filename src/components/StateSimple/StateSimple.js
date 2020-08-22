import React, { useState } from 'react'
import CounterHeader from '../CounterHeader/CounterHeader'

export default function StateSimple() {
  const [stateSimple, setStateSimple] = useState(0) // resets state on every mount

  const changeCount = (e) => {
    setStateSimple(
      e.currentTarget.dataset.increase === 'true'
        ? (prevStateSimple) => prevStateSimple + 1
        : (prevStateSimple) => prevStateSimple - 1
    )
  }

  return (
    <>
      <CounterHeader
        headingText={'Set initial state statically'}
        descriptionText={
          'Uses initial useState on mount as basis for state forever'
        }
      />
      <button data-increase={'false'} onClick={changeCount}>
        -
      </button>
      <div>{stateSimple}</div>
      <button data-increase={'true'} onClick={changeCount}>
        +
      </button>
    </>
  )
}
