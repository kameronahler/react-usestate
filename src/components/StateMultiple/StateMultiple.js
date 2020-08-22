import React, { useState } from 'react'
import CounterHeader from '../CounterHeader/CounterHeader'
import CounterButton from '../CounterButton/CounterButton'
import CounterDisplay from '../CounterDisplay/CounterDisplay'

export default function StateMultiple() {
  const [count, setCount] = useState(() => {
    return 0
  })

  const [description, setDescription] = useState(() => {
    return 'Uses multiple hooks instead of an object (most flexible)'
  })

  const changeCount = (e) => {
    setCount(
      e.currentTarget.dataset.increase === 'true'
        ? (prevCount) => prevCount + 1
        : (prevCount) => prevCount - 1
    )
  }

  return (
    <section className='counter'>
      <CounterHeader
        headingText={'Set multiple states with multiple hooks'}
        descriptionText={description}
      />
      <div className='counter__display-wrapper'>
        <CounterDisplay value={count} />
        <div>
          <CounterButton click={changeCount} increase={'false'} />
          <CounterButton click={changeCount} increase={'true'} />
        </div>
      </div>
    </section>
  )
}
