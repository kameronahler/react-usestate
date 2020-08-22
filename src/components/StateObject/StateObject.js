import React, { useState } from 'react'
import CounterHeader from '../CounterHeader/CounterHeader'
import CounterButton from '../CounterButton/CounterButton'
import CounterDisplay from '../CounterDisplay/CounterDisplay'

export default function StateObject() {
  const [stateObject, setStateObject] = useState(() => {
    return {
      count: 0,
      description: 'Same as previous example, except this state uses an object',
    }
  })

  const changeCount = (e) => {
    if (e.currentTarget.dataset.increase === 'true') {
      setStateObject((prevStateObject) => {
        return { ...prevStateObject, count: prevStateObject.count + 1 }
      })
    } else {
      setStateObject((prevStateObject) => {
        return { ...prevStateObject, count: prevStateObject.count - 1 }
      })
    }
  }

  return (
    <section className='counter'>
      <CounterHeader
        headingText={'Set multiple states with an object'}
        descriptionText={stateObject.description}
      />
      <CounterButton click={changeCount} increase={'false'} />
      <CounterDisplay value={stateObject.count} />
      <CounterButton click={changeCount} increase={'true'} />
    </section>
  )
}
