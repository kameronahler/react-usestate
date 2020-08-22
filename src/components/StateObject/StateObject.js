import React, { useState } from 'react'
import CounterHeader from '../CounterHeader/CounterHeader'

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
    <>
      <CounterHeader
        headingText={'Set state with a destructured object'}
        descriptionText={stateObject.description}
      />
      <button data-increase={'false'} onClick={changeCount}>
        -
      </button>
      <div>{stateObject.count}</div>
      <button data-increase={'true'} onClick={changeCount}>
        +
      </button>
    </>
  )
}
