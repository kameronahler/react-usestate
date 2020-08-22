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
    <>
      <CounterHeader
        headingText={'Set multiple states with multiple hooks'}
        descriptionText={description}
      />
      <CounterButton click={changeCount} increase={'false'} />
      <CounterDisplay value={count} />
      <CounterButton click={changeCount} increase={'true'} />
    </>
  )
}
