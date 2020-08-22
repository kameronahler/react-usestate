import React, { useState } from 'react'
import CounterHeader from '../CounterHeader/CounterHeader'
import CounterButton from '../CounterButton/CounterButton'
import CounterDisplay from '../CounterDisplay/CounterDisplay'

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
    <section className='counter'>
      <CounterHeader
        headingText={'Set initial state statically'}
        descriptionText={
          'Uses initial useState on mount as basis for state forever'
        }
      />
      <div className='counter__display-wrapper'>
        <CounterDisplay value={stateSimple} />
        <div>
          <CounterButton click={changeCount} increase={'false'} />
          <CounterButton click={changeCount} increase={'true'} />
        </div>
      </div>
    </section>
  )
}
